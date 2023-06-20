describe('All departaments', () => {

  beforeEach(function () {
    cy.visit('/')
  })

  it('Offer departament', () => {
    cy.get('a[href="/departamentos/12/"]')
    .contains('Ofertas')
    .click()
    cy.products_on_offer()
  });

  it('Exclusive departament', () => {
    cy.get('a[href="/departamentos/10/"]')
    .contains('Exclusive')
    .click()
    cy.exclusive()
  });

  it('Churrasco departament', () => {
    cy.get('a[href="/departamentos/2/"]')
      .contains('Churrasco')
      .click()
    cy.churrasco()
  });

  it('Bovinos departament', () => {
    cy.get('a[href="/departamentos/1/"]')
      .contains('Bovinos')
      .click()
    cy.bovinos()
  });

  it('suinos departament', () => {
    cy.get('a[href="/departamentos/6/"]')
      .contains('Suinos')
      .click()
    cy.suinos()
  });

});