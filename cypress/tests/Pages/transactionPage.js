class TransactionPage {
    selectorsList() {
        const selectors = {
            newTransactionButton: "[href='/transaction/new']",
            selectContact: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[name='amount']",
            noteField: "[placeholder='Add a note']",
            submitButton: "[data-test='transaction-create-submit-payment']",
            confirmTransaction: "[role='alert']",
            createNewTransactionButton: "[data-test='new-transaction-create-another-transaction']",
            noTransactionsText: "[data-test='empty-list-header']",
            personalTransactions: "[href='/personal']",
            receiverName: "[data-test='transaction-receiver-Ec6hHyL6SC2F']"
        }
        return selectors
    }

    newTransactionWithInsufficientFunds(amount, note) {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().confirmTransaction).contains("Insufficient Funds!")
    }

    newTransactionWithSufficientFunds(amount, note) {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().selectContact).click()
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().submitButton).click()
        cy.get(this.selectorsList().confirmTransaction).contains("Transaction Submitted!")
        cy.get(this.selectorsList().createNewTransactionButton).should('be.visible')
    }

    noTransactionsHistory() {
        cy.get(this.selectorsList().personalTransactions).contains("Mine").click()
        cy.get(this.selectorsList().noTransactionsText).contains("No Transactions")
    }

    haveTransaction() {
        cy.get(this.selectorsList().personalTransactions).contains("Mine").click()
        cy.get(this.selectorsList().receiverName).should('be.visible')
    }
}

export default TransactionPage