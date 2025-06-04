import userData from "../../fixtures/userData";
import transactionData from "../../fixtures/transactionData.json";
import HomePage from "../Pages/homePage";
import LoginPage from "../Pages/loginPage";
import SigninPage from "../Pages/signUpPage";
import TransactionPage from "../Pages/transactionPage";

const Chance = require('chance')

const chance = new Chance()
const homePage = new HomePage
const loginPage = new LoginPage
const signinPage = new SigninPage
const transactionPage = new TransactionPage


describe('Send money with funds - Real World App', () => {

  it('Transaction - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithCorrectUser(userData.loginWithBalance.username, userData.loginWithBalance.password)
    homePage.acessHomePage()
    homePage.acessTransactionPage()
    transactionPage.checkBalance(transactionData.contact.name, transactionData.transactionSucess.amount, transactionData.transactionSucess.note)
  });

  it('Transaction - Fail', () => {
    signinPage.acessSignUpPage()
    signinPage.signUpWithCorrectCredenciais(userData.signUpSucess.firstName, userData.signUpSucess.lastName, userData.signUpSucess.username, userData.signUpSucess.password)
    loginPage.acessLoginPage()
    loginPage.loginWithCorrectUser(userData.loginSucess.username, userData.loginSucess.password)
    homePage.acessHomePage()
    homePage.acessTransactionPage()
    homePage.getStartedNavPage(chance.cc_type(), chance.natural({ min: 111111111, max: 999999999 }), chance.natural({ min: 111111111, max: 999999999999 }))
    transactionPage.checkBalance(transactionData.contact.name, transactionData.transactionFail.amount, transactionData.transactionFail.note)
  });

  it("Don't have transaction - Sucess", () => {
    signinPage.acessSignUpPage()
    signinPage.signUpWithCorrectCredenciais(userData.signUpSucess.firstName, userData.signUpSucess.lastName, userData.signUpSucess.username, userData.signUpSucess.password)
    loginPage.acessLoginPage()
    loginPage.loginWithCorrectUser(userData.loginSucess.username, userData.loginSucess.password)
    homePage.acessHomePage()
    homePage.getStartedNavPage(chance.cc_type(), chance.natural({ min: 111111111, max: 999999999 }), chance.natural({ min: 111111111, max: 999999999999 }))
    transactionPage.noTransactionsHistory()
  })

  it("Have transaction - Sucess", () => {
    loginPage.acessLoginPage()
    loginPage.loginWithCorrectUser(userData.loginWithBalance.username, userData.loginWithBalance.password)
    homePage.acessHomePage()
    homePage.getStartedNavPage(chance.cc_type(), chance.natural({ min: 111111111, max: 999999999 }), chance.natural({ min: 111111111, max: 999999999999 }))
    transactionPage.haveTransaction()
  })

});