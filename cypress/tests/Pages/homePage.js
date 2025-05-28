class HomePage {
    selectorsList() {
        const selectors = {
            newTransactionButton: "[href='/transaction/new']",
            selectContact: "[data-test='user-list-item-uBmeaz5pX']",
        }
        return selectors
    }

    acessHomePage() {
        cy.visit('http://localhost:3000/')
    }
    
    acessTransactionPage() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

}

export default HomePage