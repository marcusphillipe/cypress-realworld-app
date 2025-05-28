class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[type='password']",
            rememberMeButton: "[data-test='signin-remember-me']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors
    }

    acessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    loginWithCorrectUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().rememberMeButton).click()
        cy.get(this.selectorsList().loginButton).click()
    }

    loginWithWrongUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage