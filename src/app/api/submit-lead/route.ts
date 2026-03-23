import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // A URL do seu Google Apps Script (Webhook) que você configurará no Netlify
        const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK;
        const callMeBotKey = process.env.CALLMEBOT_API_KEY; // Chave para enviar whatsapp p/ dono
        
        let sheetsStatus = "Aguardando configuração MOCK";

        // 1. Envia para a Planilha do Google Sheets (se configurado)
        if (webhookUrl) {
            await fetch(webhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            }).catch(e => console.error("Sheet Error", e));
            sheetsStatus = "Salvo na Planilha";
        }

        // 2. Dispara Notificação no Celular Pessoal do Dono (+55 14 99168-2432)
        const telefoneDono = "+5514991682432";
        const botMsg = encodeURIComponent(
            `🚨 *NOVO LEAD: CÉLERE!*\n\n*Nome:* ${body.nome}\n*Whats:* ${body.whatsapp}\n*Local:* ${body.cidade}-${body.uf}\n*Obra:* ${body.situacao}\n*Interesse:* ${body.prioridades}\n\nPlanilha atualizada!`
        );

        // A. Tentativa CallMeBot (WhatsApp)
        if (callMeBotKey) {
            await fetch(`https://api.callmebot.com/whatsapp.php?phone=${telefoneDono}&text=${botMsg}&apikey=${callMeBotKey}`)
                .catch(e => console.error("Erro WhatsApp Bot", e));
        }

        // B. Tentativa Telegram (A prova de falhas)
        const rawTelegramToken = process.env.TELEGRAM_BOT_TOKEN;
        const rawTelegramChatId = process.env.TELEGRAM_CHAT_ID;
        
        if (rawTelegramToken && rawTelegramChatId) {
            // Limpa aspas ou espaços acidentais vindos da variável de ambiente no Netlify
            const telegramToken = rawTelegramToken.replace(/["'\s]/g, "");
            const telegramChatId = rawTelegramChatId.replace(/["'\s]/g, "");

            const plainMsg = `🚨 NOVO LEAD: CÉLERE!\n\nNome: ${body.nome}\nWhats: ${body.whatsapp}\nLocal: ${body.cidade}-${body.uf}\nObra: ${body.situacao}\nInteresse: ${body.prioridades}\n\nPlanilha do sistema atualizada.`;
            
            await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text: plainMsg
                })
            }).catch(e => console.error("Erro Telegram Bot", e));
        }

        return NextResponse.json({ 
            success: true, 
            message: "Lead processado", 
            sheets: sheetsStatus,
            notificationRoute: (callMeBotKey || rawTelegramToken) ? "Enviada" : "Aguardando chave(s)"
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Falha no disparo do webhook." }, { status: 500 });
    }
}
