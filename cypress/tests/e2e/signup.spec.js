import userData from "../../fixtures/userData"
import SignUpPage from "../Pages/signUpPage"

const signUpPage = new SignUpPage

describe('Sign Up Real World App', () => {
    it('Sign Up - Sucess', () => {
        signUpPage.acessSignupPage(),
            signUpPage.signinWithCorrectCredenciais(userData.signinSucess.firstName, userData.signinSucess.lastName, userData.signinSucess.username, userData.signinSucess.password)
    });


    it('Sign Up - Fail - Blank First Name Field', () => {
        signUpPage.acessSignupPage()
        signUpPage.signinWithBlankFirstName(userData.signinFail.lastName, userData.signinFail.username, userData.signinFail.password)
    });

    it('Sign Up - Fail - Blank Last Name Field', () => {
        signUpPage.acessSignupPage()
        signUpPage.signinWithBlankFLastName(userData.signinFail.firstName, userData.signinFail.username, userData.signinFail.password)
    });

    it('Sign Up - Fail - Blank Username Field', () => {
        signUpPage.acessSignupPage()
        signUpPage.signinWithBlankUsername(userData.signinFail.firstName, userData.signinFail.lastName, userData.signinFail.password)
    });

    it('Sign Up - Fail - Blank Password Field', () => {
        signUpPage.acessSignupPage()
        signUpPage.signinWithBlankPassword(userData.signinFail.firstName, userData.signinFail.lastName, userData.signinFail.username, userData.signinFail.password)
    });

    it('Sign Up - Fail - Blank Confirm Password Field', () => {
        signUpPage.acessSignupPage()
        signUpPage.signinWithBlankConfirmPasswordField(userData.signinFail.firstName, userData.signinFail.lastName, userData.signinFail.username, userData.signinFail.password)
    });

    it('Sign Up - Fail - Wrong Password Match', () => {
        signUpPage.acessSignupPage()
        signUpPage.signinWithWrongPassword(userData.signinFail.firstName, userData.signinFail.lastName, userData.signinFail.username, userData.signinFail.password, userData.signinFail.wrongPassword)
    });
})