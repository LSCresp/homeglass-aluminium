import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // A URL do seu Google Apps Script (Webhook) que você configurará no Netlify
        const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK;
        
        if (webhookUrl) {
            // Envia os dados para a planilha
            await fetch(webhookUrl, {
                method: 'POST',
                // Modo no-cors é muito comum em requisições pro Apps Script para evitar bloqueios de CORS
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            return NextResponse.json({ success: true, message: "Lead enviado ao Google Sheets com sucesso" });
        } else {
            console.warn("[Célere] GOOGLE_SHEETS_WEBHOOK não configurada no .env / Netlify.");
            return NextResponse.json({ success: true, message: "Lead simulado (aguardando URL do Sheets)." });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Falha no disparo do webhook." }, { status: 500 });
    }
}
