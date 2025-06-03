import userData from "../../fixtures/userData.json"
import LoginPage from "../Pages/loginPage";

const loginPage = new LoginPage

describe('Login Real World App', () => {

    it('Login - Sucess', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithCorrectUser(userData.loginSucess.username, userData.loginSucess.password)
    });

    it('Login - Fail', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithWrongUser(userData.loginFail.username, userData.loginFail.password)
    });
});