describe('order', () => {

    beforeEach(function () {
        cy.login('lipemsilveira@hotmail.com', '686308mm')
    })

    it('performing order', () => {

        const beef = 'Picanha Bovina'
        const complement = 'Pão de Alho Tradicional Com Queijo'

        cy.adding_product_to_cart()
        cy.get('strong[class="cart-indicator-item-title"]')
            .click()
        cy.get('div[class="item-list-main"]')
            .should('contain', beef, complement)
        cy.finalize_order()
        cy.contains('div', 'Finalizar Compra')
            .should('be.visible')
    });

    afterEach(() => {
        cy.remove_order()
    });
})