class TransactionPage {
    selectorsList() {
        const selectors = {
            newTransactionButton: "[href='/transaction/new']",
            selectContact: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[name='amount']",
            noteField: "[placeholder='Add a note']",
            submitButton: "[data-test='transaction-create-submit-payment']",
            createNewTransactionButton: "[data-test='new-transaction-create-another-transaction']"
        }
        return selectors
    }

    newTransactionWithInsufficientFunds(amount, note) {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().submitButton).click()
    }

    newTransactionWithSufficientFunds(amount, note) {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().createNewTransactionButton).should('be.visible')
    }
}

export default TransactionPage