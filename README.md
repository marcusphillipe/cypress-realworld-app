> ⚠️ This repository is based on the [cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app) project, with structure, organization, and automated test writing developed with a focus on QA practice and learning.

---

# 🧪 Automated Testing with Cypress — Real World App

This project simulates testing a financial transfer application and was created to apply real-world concepts of automated testing using Cypress.  
The structure is designed to reflect professional QA practices, such as feature-based organization, use of the Page Object Model, and mock data via fixtures.

---

## 🎯 Objective

Validate complete application flows and test cases, including:

- User registration (with both positive and negative validations)
- Login with various scenarios (success and failure)
- Bank account creation
- Money transfers (with and without sufficient balance)
- Viewing transaction history

---

## 🛠️ Technologies and Tools

- [Cypress](https://www.cypress.io/) – End-to-End Testing
- JavaScript
- Page Object Model (POM)
- Chance.js – Dynamic data generation
- `.json` Fixtures for reusable test data

---

## ▶️ How to Run the Tests

1. **Clone the repository**:
```bash
git clone https://github.com/marcusphillipe/cypress-realworld-app.git
cd cypress-realworld-app
```

2. **Install dependencies**:
```bash
yarn
```

3. **Start the application locally**:
```bash
yarn dev
```

4. **Run the Cypress tests**:
```bash
yarn cypress:open
```

## 📁 Project Structure

```bash
cypress/
├── fixtures/
│   ├── transactionData.json
│   └── userData.json
├── tests/
│   ├── e2e/
│   │   ├── history.spec.js
│   │   ├── login.spec.js
│   │   ├── signup.spec.js
│   │   └── transactions.spec.js
│   └── Pages/
│       ├── homePage.js
│       ├── loginPage.js
│       ├── signUpPage.js
│       └── transactionPage.js
```

## 📌 Folder Structure Explained

### `/fixtures/`

`.json` files with mock data used in tests:

- `userData.json`: login and registration credentials.
- `transactionData.json`: values and descriptions of financial transfers.

### `/tests/e2e/`

Groups test files by functionality:

- `history.spec.js`: Transaction history validations.
- `login.spec.js`: Login scenarios with valid and invalid data.
- `signup.spec.js`: Full registration cases, including validations for required fields and invalid passwords.
- `transactions.spec.js`: Transfer tests with and without balance.

### `/tests/Pages/`

Implements the **Page Object Pattern**:

- Each application page has its own class with reusable methods.
- Centralizes selectors and improves test readability.

---

## ✅ Test Scenarios Implemented

### 🔐 Authentication (`login.spec.js`)

- Login with a valid user.
- Login with an incorrect user or password.
- Display of error messages.

### 👤 Registration (`signup.spec.js`)

- Successful user registration.
- Validation of required fields:
  - First name
  - Last name
  - Username
  - Password
  - Confirm password
- Validation of mismatched passwords.

### 💸 Transactions (`transactions.spec.js`)

- Successful money transfer with available balance.
- Attempt to transfer with insufficient balance.
- Correct display of success or error messages.
- Display of transactions in the user's transaction history.

### 💸 Transaction History (`history.spec.js`)

- Display of transactions in the user's transaction history.

---

## 📚 Concepts Applied

- Real use of **Page Object Model** to separate responsibilities.
- Reuse of data with `fixtures`.
- Dynamic test data generation with `chance.js`.
- Tests for **positive and negative validation**, covering the main flows of the application.
- Clean, organized tests with descriptive naming.

---

🔗 [Official base project documentation (cypress-realworld-app)](https://github.com/cypress-io/cypress-realworld-app)
