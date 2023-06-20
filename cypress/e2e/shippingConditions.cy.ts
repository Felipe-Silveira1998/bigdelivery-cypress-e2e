import cypress = require("cypress");

describe('shipping Conditions', () => {

    beforeEach(function () {
      cy.visit('/')
    })

    const product = 'Miolo da Alcatra Bovino'
  
    it('purchases over 100 reais shipping is free', () => {

      cy.search_product(product)
      cy.condition_not_to_pay_shipping()
      cy.get('div[class="free-shipping-notice-main"]')
      .should('not.exist')
      cy.get('button[class="fa fa-trash-o item-list-trash"]')
      .click()

    });

    it('purchases under 100 reais pay shipping', () => {
        
      cy.search_product(product)
      cy.condition_to_pay_reight()
      cy.get('div[class="free-shipping-notice-main"]')
      .should('be.visible')
      cy.get('button[class="fa fa-trash-o item-list-trash"]')
      .click()
    });
});