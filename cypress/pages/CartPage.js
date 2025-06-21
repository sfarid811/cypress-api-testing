// cypress/pages/CartPage.js
class CartPage {
    addItemToCart(itemSelector) {
        cy.get(itemSelector).click();
    }

    openCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
    }

    removeItemFromCart(itemSelector) {
        cy.get(itemSelector).click();
    }

    proceedToCheckout() {
        cy.get('[data-test="checkout"]').click();
    }

    fillCheckoutInformation(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
    }

    finishOrder() {
        cy.get('[data-test="finish"]').click();
    }

    verifyOrderCompletion() {
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
    }

    goBackToProducts() {
        cy.get('[data-test="back-to-products"]').click();
    }
}

export default new CartPage();