declare namespace Cypress {
  interface Chainable {
    login(email: string, password: string): Chainable<Element>;
    logout: () => void
    churrasco: () => void
    bovinos: () => void
    suinos: () => void
    search_product: (product) => void
    condition_not_to_pay_shipping: () => void
    condition_to_pay_reight: () => void
    products_on_offer: () => void
    exclusive: () => void
    adding_product_to_cart: () => void
    finalize_order: () => void
    remove_order: () => void
  }
}

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login')

  cy.get('div[class="login-box-main"] input[placeholder="Email"]')
    .type(email, { log: false });
  cy.get('div[class="login-box-main"] input[placeholder="Senha"]')
    .type(password, { log: false });
  cy.get('div[class="login-box-main"] button')
    .click();
});

Cypress.Commands.add('logout', () => {
  cy.get('div[class="dropbtn-text"] strong')
    .contains('Felipe')
    .click()
  cy.get('a[href="/logout"]')
    .click()
});

Cypress.Commands.add('churrasco', () => {
  cy.get('a[href="/departamentos/2/bovinas-grill/"] h3')
    .should('have.text', 'CORTES BOVINOS GRILL')
  cy.get('a[href="/departamentos/2/bovinas-nobre/"] h3')
    .should('have.text', 'CORTES BOVINOS NOBRES')
  cy.get('a[href="/departamentos/2/carnes-suinas/"] h3')
    .should('have.text', 'CORTES SUÍNOS')
  cy.get('a[href="/departamentos/2//"] h3')
    .contains('LINGUIÇAS E SALSICHAS')
  cy.get('a[href="/departamentos/2//"] h3')
    .contains('AVES')
  cy.get('a[href="/departamentos/2/carnes-bovinas/"] h3')
    .should('have.text', 'HAMBÚRGUERES')
  cy.get('a[href="/departamentos/2/bovinas-importadas/"] h3')
    .should('have.text', 'CORTES IMPORTADOS')
  cy.get('a[href="/departamentos/2//"] h3')
    .contains('PÃO DE ALHO')
  cy.get('a[href="/departamentos/2/carnes-de-cordeiro/"] h3')
    .should('have.text', 'CORTES DE CORDEIRO')
  cy.get('a[href="/departamentos/2/null/"] h3')
    .should('have.text', 'ESPETINHOS')
  cy.get('a[href="/departamentos/2/complementos/"] h3')
    .should('have.text', 'COMPLEMENTOS')
  cy.get('a[href="/departamentos/2/acessorios/"] h3')
    .should('have.text', 'ACESSÓRIOS')
});

Cypress.Commands.add('bovinos', () => {
  cy.get('a[href="/departamentos/1/carnes-grill/"] h3')
    .should('have.text', 'LINHA GRILL')
  cy.get('a[href="/departamentos/1/carnes-nobre/"] h3')
    .should('have.text', 'LINHA NOBRE')
  cy.get('a[href="/departamentos/1/carnes-de-primeira/"] h3')
    .should('have.text', 'CORTES DE PRIMEIRA')
  cy.get('a[href="/departamentos/1/carnes-de-segunda/"] h3')
    .should('have.text', 'CORTES DE SEGUNDA')
  cy.get('a[href="/departamentos/1/carnes-com-osso/"] h3')
    .should('have.text', 'CORTES COM OSSO')
  cy.get('a[href="/departamentos/1/miudos/"] h3')
    .should('have.text', 'MIÚDOS')
  cy.get('a[href="/departamentos/1/carnes-do-sol/"] h3')
    .should('have.text', 'CARNES DO SOL')
  cy.get('a[href="/departamentos/1//"] h3')
    .should('have.text', 'CORTES COM OSSO ESPECIAIS')
});

Cypress.Commands.add('suinos', () => {
  cy.get('a[href="/departamentos/6/carne-de-suino/"] h3')
    .should('have.text', 'CORTES SUÍNOS')
  cy.get('a[href="/departamentos/6/salgados/"] h3')
    .should('have.text', 'SALGADOS e DEFUMADOS')
  cy.get('a[href="/departamentos/6/carne-com-osso/"] h3')
    .should('have.text', 'CORTES COM OSSO')
  cy.get('a[href="/departamentos/6/carne-sem-osso/"] h3')
    .should('have.text', 'CORTES SEM OSSO')
});

Cypress.Commands.add('search_product', (product) => {

  cy.get('div[class="header-main"] input[type="search"]')
    .type(product)
  cy.get('div[class="header-main"] button[type="submit"]')
    .click()
  cy.get('a[href="/produtos/miolo-da-alcatra-bovino-big-carnes/"] h3')
    .should('have.text', product)
    .click()
});

Cypress.Commands.add('condition_not_to_pay_shipping', () => {

  cy.get('div[class="buybox-main"] button[class="add-to-cart-before-button"]')
    .click()
  cy.get('a[href="/carrinho/"] ').click()
  cy.get('div[class="free-shipping-notice-main"]')
    .should('be.visible')
  for (let i = 0; i < 5; i++) {
    cy.get('i[class="fa fa-plus"]').click()
  }
});

Cypress.Commands.add('condition_to_pay_reight', () => {

  cy.get('div[class="buybox-main"] button[class="add-to-cart-before-button"]').click()
  cy.get('a[href="/carrinho/"] ').click()
  for (let i = 0; i < 2; i++) {
    cy.get('i[class="fa fa-plus"]').click()
    cy.get('div[class="free-shipping-notice-main"]')
      .should('be.visible')
  }
});

Cypress.Commands.add('products_on_offer', () => {

  cy.get('a[href="/departamentos/12//"] h3')
    .should('have.text', 'QUEIMA DE ESTOQUE ')
});

Cypress.Commands.add('exclusive', () => {

  cy.get('a[href="/departamentos/10/kits-diversos/"] h3')
    .should('have.text', 'KITS DIVERSOS')
});

Cypress.Commands.add('adding_product_to_cart', () => {

  const beef = 'Picanha Bovina'
  const complement = 'Pão de Alho Tradicional Com Queijo'

  cy.get('div[class="header-main"] input[type="search"]')
    .type(beef)
  cy.get('div[class="header-main"] button[type="submit"]')
    .click()
  cy.contains('h3', beef)
    .click()
  cy.get('div[class="buybox-main"] button[class="add-to-cart-before-button"]')
    .click()
  cy.get('div[class="header-main"] input[type="search"]')
    .type(complement)
  cy.get('div[class="header-main"] button[type="submit"]')
    .click()
  cy.contains('h3', complement)
    .click({ force: true })
  cy.get('div[class="buybox-main"] button[class="add-to-cart-before-button"]')
    .click()
});

Cypress.Commands.add('finalize_order', () => {

  const address = 'AVENIDA CAETANO CASA 79'
  const delivery_option = '15:00 às 20:00'
  const card_flag = 'MasterCard - Crédito'

  cy.get('a[href="/checkout/"]')
    .click()
  cy.contains('p', address)
    .should('be.visible')
    .click()
    cy.get('div[class="checkout-continue-button-main "]')
    .click()
    cy.contains('h6', delivery_option)
    .click()
    cy.get('div[class="checkout-continue-button-main "]')
    .click()
    cy.get(':nth-child(2) > .radio-button-circle')
    .click()
    cy.contains('p', 'Cartão na entrega')
    .click()
    cy.contains('p', card_flag)
    .click()
});

Cypress.Commands.add('remove_order', () => {

  cy.get('img[class="simple-logo-image"]')
    .click()
    cy.contains('strong', 'Carrinho')
    .should('be.visible')
    .click()
    cy.get('button[class="fa fa-trash-o item-list-trash"]')
    .click({ multiple: true })
});






