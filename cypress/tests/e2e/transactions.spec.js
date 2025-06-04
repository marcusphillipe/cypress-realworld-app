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

  it.skip('Transaction - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithCorrectUser(userData.loginWithBalance.username, userData.loginWithBalance.password)
    homePage.acessHomePage()
    homePage.acessTransactionPage()
    transactionPage.newTransactionWithSufficientFunds(transactionData.transactionSucess.amount, transactionData.transactionSucess.note)
  });

  it.skip('Transaction - Fail', () => {
    signinPage.acessSignupPage()
    signinPage.signinWithCorrectCredenciais(userData.signinSucess.firstName, userData.signinSucess.lastName, userData.signinSucess.username, userData.signinSucess.password)
    loginPage.acessLoginPage()
    loginPage.loginWithCorrectUser(userData.loginSucess.username, userData.loginSucess.password)
    homePage.acessHomePage()
    homePage.acessTransactionPage()
    homePage.getStartedNavPage(chance.cc_type(), chance.natural({ min: 111111111, max: 999999999 }), chance.natural({ min: 111111111, max: 999999999999 }))
    transactionPage.newTransactionWithInsufficientFunds(transactionData.transactionFail.amount, transactionData.transactionFail.note)
  });

  it.skip("Don't have transaction - Sucess", () => {
    signinPage.acessSignupPage()
    signinPage.signinWithCorrectCredenciais(userData.signinSucess.firstName, userData.signinSucess.lastName, userData.signinSucess.username, userData.signinSucess.password)
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