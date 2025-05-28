class SigninPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            alertFirstNameField: '#firstName-helper-text',
            lastNameField: "[name='lastName']",
            alertLastNameField: '#lastName-helper-text',
            usernameField: "[name='username']",
            alertUsernameField: '#username-helper-text',
            passwordField: "[name='password']",
            alertPasswordField: '#password-helper-text',
            confirmPasswordField: "[name='confirmPassword']",
            alertWrongPassword: '#confirmPassword-helper-text', 
            alertConfirmPasswordField: '#confirmPassword-helper-text',
            signupButton: "[type='submit']",
            disableButton : "[disabled='']"
        }
        return selectors
    }

    acessSignupPage() {
        cy.visit('http://localhost:3000/signup')
    }
    signinWithCorrectCredenciais(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().signupButton).click()
    }

    signinWithBlankFirstName(lastName, username, password,) {
        cy.get(this.selectorsList().firstNameField).click()
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().alertFirstNameField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signinWithBlankFLastName(firstName, username, password,) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).click()
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().alertLastNameField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signinWithBlankUsername(firstName, lastName, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).click()
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().alertUsernameField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signinWithBlankPassword(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().alertPasswordField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signinWithBlankConfirmPasswordField(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().confirmPasswordField).click()
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().alertConfirmPasswordField).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }

    signinWithWrongPassword(firstName, lastName, username, password, wrongPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(wrongPassword)
        cy.get(this.selectorsList().alertWrongPassword).should('be.visible')
        cy.get(this.selectorsList().disableButton).should('be.visible')
    }
}

export default SigninPage