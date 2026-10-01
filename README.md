# O Lado Aleatório dos Dias Comuns — Site Oficial & Leitor Interativo

Site oficial, moderno e interativo para divulgação e leitura do livro **"O Lado Aleatório dos Dias Comuns"**, de **Luiz Carlos dos Santos** (Toledo, PR : LSantos, 2026, 158 p., impresso pela UICLAP).

Disponível para aquisição na [UICLAP](https://loja.uiclap.com/titulo/ua205494).

---

## 📖 Sobre o Livro

> *"A vida não acontece nos grandes eventos. Ela acontece no intervalo. No aleatório."*

Um livro sobre o que acontece quando nada acontece: o café que esfria na bancada, a chave que já não abre porta alguma, a corrida para salvar a roupa no varal quando começa a chover e a espera por uma quarta-feira que levou anos para virar encontro.

- **Autor:** Luiz Carlos dos Santos
- **Páginas:** 158 páginas (30 crônicas divididas em 4 partes + Prefácio)
- **Edição:** Revista e ampliada com a *Parte IV — Ainda*
- **Acabamento:** Miolo em papel Pólen 80g, composto em Times New Roman, brochura com orelhas

---

## 🚀 Como Publicar este Projeto no GitHub e Colocar no Ar

### 1. Criar repositório no GitHub
1. Acesse o [GitHub](https://github.com/) e crie um novo repositório (exemplo: `o-lado-aleatorio` ou o nome que preferir).
2. Deixe o repositório público (para poder usar o **GitHub Pages** gratuitamente).

### 2. Enviar o código para o GitHub (pelo terminal)
Abra a pasta do projeto no seu terminal ou VS Code e execute:

```bash
# 1. Inicializar o Git (caso ainda não esteja inicializado)
git init

# 2. Adicionar todos os arquivos do projeto
git add .

# 3. Fazer o primeiro commit
git commit -m "feat: site oficial e interativo do livro O Lado Aleatório dos Dias Comuns"

# 4. Definir a branch principal como main
git branch -M main

# 5. Conectar com o seu repositório no GitHub (substitua pelo link do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 6. Enviar para o GitHub
git push -u origin main
```

---

## 🌐 Como Ativar o Site no GitHub Pages (Hospedagem Gratuita)

O projeto já inclui o arquivo de automação `.github/workflows/deploy.yml` configurado para o GitHub Pages.

Para ativá-lo:
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment** > **Source**, mude para **GitHub Actions**.
4. Pronto! O GitHub irá compilar o site automaticamente e fornecer o endereço do seu site (geralmente `https://seu-usuario.github.io/seu-repositorio/`).

---

## 💻 Como Rodar o Projeto Localmente no seu Computador

Requisitos: [Node.js](https://nodejs.org/) versão 18 ou superior instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra o navegador no endereço indicado (normalmente `http://localhost:3000`).

Para gerar a versão final de produção (pasta `dist`):
```bash
npm run build
```

---

## 🛠️ Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite** (com suporte a caminhos relativos para hospedagem em qualquer subpasta)
- **Tailwind CSS v4** (estilização moderna e responsiva)
- **Lucide React** (ícones de interface e navegação)
- **Web Audio API** (som ambiente opcional de chuva suave na vidraça)
- **Design Editorial**: textura tátil de Papel Pólen 80g e tipografia literária

---

## ☕ Ficha Editorial

- **ISBN:** 978-00-0000-000-0
- **Composição:** Times New Roman
- **Papel do Miolo:** Pólen 80g
- **Impressão:** UICLAP ([loja.uiclap.com/titulo/ua205494](https://loja.uiclap.com/titulo/ua205494))
- **Local:** Toledo, Paraná — Brasil
