import transactionData from "../../fixtures/transactionData.json"
import HomePage from "../Pages/homePage";
import LoginPage from "../Pages/loginPage";
import SigninPage from "../Pages/signinPage"; 
import TransactionPage from "../Pages/transactionPage";

const homePage = new HomePage
const loginPage = new LoginPage
const signinPage = new SigninPage
const transactionPage = new TransactionPage


describe('Send money with funds - Real World App', () => {

  it('Transaction - Sucess', () => {
    signinPage.acessSignupPage(),
    signinPage.signinWithCorrectCredenciais(userData.signinSucess.firstName, userData.signinSucess.lastName, userData.signinSucess.username, userData.signinSucess.password)
    loginPage.acessLoginPage(),
    loginPage.loginWithCorrectUser(userData.loginSucess.username, userData.loginSucess.password),
    homePage.acessHomePage(),
    homePage.acessTransactionPage(),
    transactionPage.newTransactionWithSufficientFunds(transactionData.transactionSucess.amount, transactionData.transactionSucess.note)
  });

  it('Transaction - Fail', () => {
    signinPage.acessSignupPage(),
    signinPage.signinWithCorrectCredenciais(userData.signinSucess.firstName, userData.signinSucess.lastName, userData.signinSucess.username, userData.signinSucess.password)
    loginPage.acessLoginPage(),
    loginPage.loginWithCorrectUser(userData.loginSucess.username, userData.loginSucess.password),
    homePage.acessHomePage(),
    homePage.acessTransactionPage(),
    transactionPage.newTransactionWithInsufficientFunds(transactionData.transactionFail.amount, transactionData.transactionFail.note)
  });

});