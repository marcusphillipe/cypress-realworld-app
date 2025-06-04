> ⚠️ Este repositório é baseado no projeto [cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app), com estrutura, organização e escrita de testes automatizados, desenvolvidos com foco em prática e aprendizado na área de QA.

---

# 🧪 Testes Automatizados com Cypress — Real World App

Este projeto simula o teste de uma aplicação de transferências financeiras e foi criado com o objetivo de aplicar conceitos reais de testes automatizados utilizando o Cypress.  
A estrutura foi pensada para refletir práticas profissionais de QA, como organização por funcionalidades, uso de Page Object Model e dados mockados via fixtures.

---

## 🎯 Objetivo

Validar fluxos completos e casos de testes da aplicação, incluindo:

- Cadastro de usuários (com validações negativas e positivas)
- Login com diferentes cenários (sucesso e falha)
- Criação de contas bancárias
- Envio de transações financeiras (com e sem saldo)
- Visualização de histórico de transações

---

## 🛠️ Tecnologias e Ferramentas

- [Cypress](https://www.cypress.io/) – Testes End-to-End
- JavaScript
- Page Object Model (POM)
- Chance.js – Geração de dados dinâmicos
- Fixtures em `.json` para dados reutilizáveis

---

## ▶️ Como Executar os Testes

1. **Clone o repositório**:
```bash
git https://github.com/marcusphillipe/cypress-realworld-app.git
cd cypress-realworld-app
```

2. **Instale as dependências**:
```bash
yarn
```

3. **Inicie a aplicação localmente**:
```bash
yarn dev
```

4. **Execute os testes com Cypress**:
```bash
yarn cypress:open
```

## 📁 Estrutura do Projeto

```bash
cypress/
├── fixtures/
│   ├── transactionData.json
│   └── userData.json
├── tests/
│   ├── e2e/
│   │   ├── login.spec.js
│   │   ├── signup.spec.js
│   │   └── transactions.spec.js
│   └── Pages/
│       ├── homePage.js
│       ├── loginPage.js
│       ├── signUpPage.js
│       └── transactionPage.js
```

## 📌 Explicação das Pastas

### `/fixtures/`
Arquivos `.json` com dados fictícios utilizados nos testes:

- `userData.json`: credenciais de login e cadastro.
- `transactionData.json`: valores e descrições de transferências.

### `/tests/e2e/`
Agrupa os arquivos de teste divididos por funcionalidade:

- `login.spec.js`: Cenários de login com dados válidos e inválidos.
- `signup.spec.js`: Casos de cadastro completos, cobrindo validações de campos obrigatórios e senha incorreta.
- `transactions.spec.js`: Testes de transações com e sem saldo, além de validações de histórico.

### `/tests/Pages/`
Implementação do **Page Object Pattern**:

- Cada página da aplicação tem sua classe dedicada com métodos reutilizáveis.
- Mantém os seletores centralizados e melhora a legibilidade dos testes.

---

## ✅ Casos de Teste Implementados

### 🔐 Autenticação (`login.spec.js`)
- Login com usuário válido.
- Login com senha incorreta.
- Exibição de mensagens de erro.

### 👤 Cadastro (`signup.spec.js`)
- Cadastro bem-sucedido.
- Validação de campos obrigatórios:
  - Nome
  - Sobrenome
  - Usuário
  - Senha
  - Confirmação da senha
- Senhas que não coincidem.

### 💸 Transações (`transactions.spec.js`)
- Envio de dinheiro com saldo suficiente.
- Tentativa de transação com saldo insuficiente.
- Exibição correta de mensagens de confirmação/erro.
- Exibição de transações na área de histórico pessoal.

---

## 📚 O que foi aplicado

- Uso real de **Page Object Model** para separação de responsabilidades.
- Reaproveitamento de dados com `fixtures`.
- Geração dinâmica de dados com `chance.js`.
- Testes de **validação negativa e positiva**, cobrindo os principais fluxos da aplicação.
- Testes organizados, limpos e com nomenclatura descritiva.

---

🔗 [Documentação oficial do projeto base (cypress-realworld-app)](https://github.com/cypress-io/cypress-realworld-app)
