import userData from "../../fixtures/userData"
import SigninPage from "../Pages/signinPage"

const signinPage = new SigninPage

describe('Signin Real World App', () => {
    it('Signin - Sucess', () => {
        signinPage.acessSignupPage(),
        signinPage.signinWithCorrectCredenciais(userData.signinSucess.firstName, userData.signinSucess.lastName, userData.signinSucess.username, userData.signinSucess.password)
    });

    
    it('Signin - Fail - Blank First Name Field', () => {
        signinPage.acessSignupPage(),
        signinPage.signinWithBlankFirstName(userData.signinFail.lastName, userData.signinFail.username, userData.signinFail.password)
    });
    
    it('Signin - Fail - Blank Last Name Field', () => {
        signinPage.acessSignupPage(),
        signinPage.signinWithBlankFLastName(userData.signinFail.firstName, userData.signinFail.username, userData.signinFail.password)
    });
    
    it('Signin - Fail - Blank Username Field', () => {
        signinPage.acessSignupPage(),
        signinPage.signinWithBlankUsername(userData.signinFail.firstName, userData.signinFail.lastName, userData.signinFail.password)
    });
    
    it('Signin - Fail - Blank Password Field', () => {
        signinPage.acessSignupPage(),
        signinPage.signinWithBlankPassword(userData.signinFail.firstName, userData.signinFail.lastName,userData.signinFail.username, userData.signinFail.password)
    });

    it('Signin - Fail - Blank Confirm Password Field', () => {
        signinPage.acessSignupPage(),
        signinPage.signinWithBlankConfirmPasswordField(userData.signinFail.firstName, userData.signinFail.lastName,userData.signinFail.username, userData.signinFail.password)
    });

    it('Signin - Fail - Wrong Password Match', () => {
        signinPage.acessSignupPage(),
        signinPage.signinWithWrongPassword(userData.signinFail.firstName, userData.signinFail.lastName, userData.signinFail.username, userData.signinFail.password, userData.signinFail.wrongPassword)
    });
})