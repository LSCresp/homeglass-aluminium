import { CONTATO } from "@/components/CartaoDigital";
import { REPRESENTANTES, buscarRepresentante, whatsappDe } from "@/data/representantes";

/** Um .vcf por representante, gerado no build junto com a página. */
export function generateStaticParams() {
    return REPRESENTANTES.map((representante) => ({ vendedor: representante.slug }));
}

export const dynamic = "force-static";
export const dynamicParams = false;

/** +55 14 99161-9177, formato que a agenda do celular entende bem. */
function formatarParaAgenda(numero: string) {
    const ddd = numero.slice(2, 4);
    const parte1 = numero.slice(4, numero.length - 4);
    const parte2 = numero.slice(-4);
    return `+55 ${ddd} ${parte1}-${parte2}`;
}

/** Acento em vCard 3.0 é dor de cabeça em agenda antiga; melhor tirar. */
function semAcento(texto: string) {
    // ̀-ͯ = marcas de acentuação que o NFD separa das letras
    // eslint-disable-next-line no-misleading-character-class
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function GET(_request: Request, { params }: { params: { vendedor: string } }) {
    const representante = buscarRepresentante(params.vendedor);

    if (!representante) {
        return new Response("Representante nao encontrado", { status: 404 });
    }

    const nome = semAcento(representante.nome);
    const cargo = semAcento(representante.cargo ?? "Representante de Vendas");
    const telefone = formatarParaAgenda(representante.telefone);
    const whatsapp = formatarParaAgenda(whatsappDe(representante));

    const linhas = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${nome.split(" ").slice(1).join(" ")};${nome.split(" ")[0]};;;`,
        `FN:${nome}`,
        `ORG:${semAcento(CONTATO.empresa)}`,
        `TITLE:${cargo}`,
        `TEL;TYPE=WORK,VOICE:${telefone}`,
        ...(whatsapp !== telefone ? [`TEL;TYPE=CELL,VOICE:${whatsapp}`] : []),
        `EMAIL;TYPE=INTERNET,WORK:${CONTATO.email}`,
        `URL:${CONTATO.site}/cartao/${representante.slug}`,
        `X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/${CONTATO.instagram}`,
        `NOTE:${semAcento("Esquadrias de Aluminio e Vidro Premium - Projetos Personalizados.")}`,
        "END:VCARD",
        "",
    ];

    return new Response(linhas.join("\r\n"), {
        headers: {
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": `attachment; filename="${representante.slug}.vcf"`,
        },
    });
}
