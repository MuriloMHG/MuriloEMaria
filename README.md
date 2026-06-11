# Surpresa Dia dos Namorados

Site romântico feito com React + Vite para publicar na Vercel e abrir por QR Code.

## Como rodar no computador

1. Instale o Node.js LTS: https://nodejs.org
2. Abra a pasta do projeto no VS Code.
3. No terminal, rode:

```bash
npm install
npm run dev
```

4. Abra o link que aparecer no terminal, normalmente:

```txt
http://localhost:5173
```

## Como personalizar

Abra o arquivo:

```txt
src/main.jsx
```

Altere:

- `nome1`
- `nome2`
- `fraseInicial`
- `textoFinal`
- `perguntaFinal`
- textos dentro da lista `momentos`

## Como colocar suas fotos

Coloque suas fotos dentro de:

```txt
public/fotos
```

Use estes nomes:

```txt
foto-01.jpg
foto-02.jpg
foto-03.jpg
foto-04.jpg
foto-05.jpg
```

Se quiser mais fotos, adicione novos itens no array `momentos` dentro de `src/main.jsx`.

## Como publicar na Vercel

1. Crie uma conta em https://vercel.com
2. Suba este projeto para o GitHub.
3. Na Vercel, clique em **Add New Project**.
4. Escolha o repositório.
5. Framework: Vite.
6. Build command: `npm run build`.
7. Output directory: `dist`.
8. Clique em **Deploy**.

A Vercel vai gerar um link público.

## Como gerar o QR Code

Depois do deploy, copie o link da Vercel e gere o QR Code em algum gerador online confiável, ou use o navegador/Chrome:

1. Abra o site publicado.
2. Clique no botão de compartilhar ou no menu do Chrome.
3. Procure a opção **Criar código QR**.
4. Baixe ou imprima o QR Code.

## Observação importante

Quem tiver o link consegue abrir o site. Evite fotos muito íntimas ou informações sensíveis.
