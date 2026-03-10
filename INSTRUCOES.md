# Célere – Casa Inteligente | Landing Page

Este projeto foi gerado sob medida para a Célere, utilizando **Next.js (App Router)** e **Tailwind CSS**. A estrutura é otimizada para SEO, Performance (Lighthouse), e Acessibilidade (A11y), seguindo uma estética premium (Art Déco + Tecnologia).

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js**: Versão LTS (18.x ou 20.x). [Baixe aqui](https://nodejs.org/).

### Passos
1. Abra o terminal nesta pasta (`celere-landing`).
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. **Como abrir no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a página.

---

## 🌐 Pronto para Publicar (Checklist)

Para colocar a landing page no ar sem precisar refazer o projeto, siga estes passos:

1. **Favicon e Imagens de Compartilhamento (Open Graph):**
   - Substitua o arquivo genérico `favicon.ico` na pasta `public/`.
   - Substitua ou adicione a imagem `public/og-image.jpg` (ideal: 1200x630px). Isso é o que aparece no WhatsApp/LinkedIn quando o link é compartilhado.

2. **SEO Básico e URLs:**
   - Em `src/app/layout.tsx`, atualize a propriedade `url` com o seu domínio real (ex: `https://celerecasainteligente.com.br`).
   - Se possuir ferramentas de Analytics (Google Analytics/Tag Manager), adicione os scripts neste mesmo arquivo.

3. **Configuração do Formulário e WhatsApp:**
   - No arquivo `src/components/Hero.tsx` e `src/components/ContactForm.tsx`, altere a constante `WHATSAPP_NUMBER` do valor `"SEU_NUMERO_AQUI"` para o número real (apenas números com DDI e DDD, ex: `"5511999999999"`).
   - Opcional de Endpoint: Quando tiver um servidor/backend para receber os Leads de forma automática, basta ir em `src/components/ContactForm.tsx`, alterar `const useEndpoint = true;` e atualizar o URL `/api/contato-endpoint` de acordo com a sua API. 

4. **Conteúdo Fixo (Prova Social):**
   - No componente `src/components/SocialProof.tsx`, substitua o texto lorem-ipsum pelos depoimentos reais.

5. **Deploy:**
   - O projeto está pronto para a **Vercel**, basta vincular seu GitHub e o deploy será 100% automático. Alternativas: Netlify, AWS Amplify, ou qualquer servidor Node.js executando `npm run build` seguido de `npm run start`.
