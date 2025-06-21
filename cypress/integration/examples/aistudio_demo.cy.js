// cypress/integration/examples/aistudio_demo.cy.js
import LoginPage from '../../pages/LoginPage';
import CartPage from '../../pages/CartPage';

describe('AI Studio Demo', () => {
    it('should load the AI Studio demo page', () => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should add items to the cart and complete the checkout process', () => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');

        // Add items to the cart
        CartPage.addItemToCart('[data-test="add-to-cart-sauce-labs-backpack"]');
        CartPage.addItemToCart('[data-test="add-to-cart-sauce-labs-bike-light"]');

        // Open cart and proceed to checkout
        CartPage.openCart();
        CartPage.proceedToCheckout();

        // Fill checkout information
        CartPage.fillCheckoutInformation('John', 'Doe', '75000');

        // Finish the order
        CartPage.finishOrder();

        // Verify order completion
        CartPage.verifyOrderCompletion();

        // Go back to products
        CartPage.goBackToProducts();
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('sort', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://saucedemo.com');
        cy.get('[data-test="username"]').clear('standard_user');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('.error-message-container').click();
        cy.get('[data-test="password"]').clear('s');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="product-sort-container"]').select('za');
        cy.get('[data-test="product-sort-container"]').select('lohi');
        cy.get('[data-test="product-sort-container"]').select('az');
        cy.get('[data-test="product-sort-container"]').select('hilo');
        /* ==== End Cypress Studio ==== */
    });
});