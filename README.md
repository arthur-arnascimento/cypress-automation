# 🛠 Cypress Automation - Portfólio

![Cypress](https://img.shields.io/badge/Cypress-Automation-green) ![Node.js](https://img.shields.io/badge/Node.js-LTS-blue) ![GitHub](https://img.shields.io/badge/GitHub-Repo-black)

Este projeto demonstra habilidades avançadas em **automação de testes com Cypress**, incluindo **comandos customizados, Page Object, data-driven testing, fixtures e captura de evidências**.  

---

## 🧩 Técnicas de Automação Aplicadas

### 1️⃣ Comandos Customizados
- Reutilização de ações como cadastro, login e adição de produtos.  
- Parâmetros para flexibilidade e redução de duplicação de código.

### 2️⃣ Captura de Evidências
- Screenshots automáticas e gravação de vídeos.  
- Facilita análise de falhas e validação de resultados.

### 3️⃣ Variáveis Globais
- Armazenamento seguro de credenciais e informações compartilhadas.  
- Acesso simples em múltiplos testes.

### 4️⃣ Fixtures (Arquivos de Dados)
- Dados fixos em JSON garantem consistência nos testes.  
- Ex.: login de usuários, endereços de faturamento.

### 5️⃣ Data-Driven Testing
- Executa testes para múltiplos cenários e combinações de dados.  
- Aumenta cobertura de testes e robustez dos fluxos.

### 6️⃣ Page Object
- Encapsula elementos e ações da página.  
- Facilita manutenção e organização de fluxos complexos.

### 7️⃣ Page Object + Data-Driven
- Combina abstração de Page Object com dados dinâmicos.  
- Ex.: cadastro de múltiplos usuários e endereços.

### 8️⃣ Ações Diretas na UI
- Testes rápidos e diretos para cenários simples.  
- Ideal quando não há necessidade de abstração.

---

## 🏷 Módulos Automatizados

### 🔑 Login
- Cenários de sucesso e falha.  
- Técnicas: commands customizados, fixtures e data-driven testing.  
- Evidências: screenshots + vídeos.

### 📝 Cadastro / Endereço de Faturamento
- Criação de usuários e preenchimento de endereço.  
- Técnicas: commands customizados, Page Object e data-driven testing.  

### 🛒 Carrinho de Compras
- Adição de produtos com diferentes atributos (quantidade, tamanho, cor).  
- Técnicas: comandos parametrizados e ações diretas na interface.  

---

## ⚙️ Pré-requisitos

Antes de executar os testes, instale:

- 🟢 **GitBash** (Windows) – Terminal Bash para Windows  
- 🟢 **Node.js** (LTS) – Permite execução de JavaScript fora do navegador  
- 🌐 **Navegador** Chrome, Edge ou Firefox  
- 🖥 **Editor de código** (opcional, ex.: Visual Studio Code)  

---

## 🖥 Configurando o Ambiente

### Linux

#### 1️⃣ Instalação do Node.js

```bash
sudo apt-get install curl
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 2️⃣ Instalação do NPM

```bash
sudo apt install npm
```

### Windows
#### 1️⃣ Instalação do GitBash

- Acesse https://gitforwindows.org e baixe a versão mais recente.
- Execute o instalador.

#### 2️⃣ Instalação do Node.js

- Acesse https://nodejs.org/en/download e baixe a versão LTS. 
- Execute o instalador.

#### 3️⃣ Instalação do NPM

- Após instalar o Node.js, abra o GitBash e execute:

```bash
npm install
```

## 📂 Clonar o Repositório

```bash
git clone https://github.com/arthur-arnascimento/cypress-automation.git
```

```bash
cd cypress-automation
```

## 📦 Instalar Dependências

```bash
npm install
npx cypress install
# ou yarn install
```

## ▶️ Executar os Testes

### Modo Interativo (UI)

```bash
npx cypress open
```

### Modo Headless (CLI, gera vídeos)

```bash
npx cypress run
```

### Executar um teste específico

```bash
npx cypress run --spec "cypress/e2e/apresentacaoPortfolio.cy.js"
```

## 📌 Observações Gerais
- Estrutura organizada para escalabilidade do projeto.
- Uso de boas práticas que facilitam **manutenção, leitura e reaproveitamento** do código.
- Combinação de técnicas avançadas garante **testes robustos, confiáveis e profissionais**.

---

## 🏆 Conclusão
Este projeto demonstra habilidades em automação com Cypress, cobrindo técnicas como **comandos customizados, Page Object, data-driven testing, fixtures, evidências visuais e testes parametrizados**.