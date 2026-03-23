import { NextResponse } from 'next/server';

export async function GET() {
    // Para desativar o cache do NextJS nesta rota e forçar execução live:
    const rand = Date.now();
    try {
        const rawTelegramToken = process.env.TELEGRAM_BOT_TOKEN;
        const rawTelegramChatId = process.env.TELEGRAM_CHAT_ID;

        // Análise Inicial: O Netlify conseguiu enxergar as chaves?
        if (!rawTelegramToken || !rawTelegramChatId) {
            return NextResponse.json({ 
                diagnostico: "❌ ERRO: O Netlify não encontrou as variáveis.", 
                TELEGRAM_BOT_TOKEN_PRESENTE: !!rawTelegramToken, 
                TELEGRAM_CHAT_ID_PRESENTE: !!rawTelegramChatId,
                rand
            });
        }

        // Limpeza militar para evitar caracteres corrompidos na colagem do Netlify
        const telegramToken = rawTelegramToken.replace(/["'\s]/g, "");
        const telegramChatId = rawTelegramChatId.replace(/["'\s]/g, "");

        const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
        
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: "🔎 TESTE DO FIREWALL: O servidor Netlify da Célere conseguiu se comunicar com o seu Robô com sucesso!"
            })
        });

        const data = await response.json();

        return NextResponse.json({ 
            diagnostico: response.ok ? "✅ SUCESSO! Mensagem enviada para o seu celular." : "❌ ERRO: O Telegram rejeitou a mensagem.", 
            status_http_do_telegram: response.status, 
            resposta_do_telegram: data,
            rand
        });

    } catch (e: any) {
        return NextResponse.json({ diagnostico: "❌ ERRO CRÍTICO no servidor Next.js", detalhes: e.message, rand });
    }
}
