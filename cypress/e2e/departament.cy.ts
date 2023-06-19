describe('All departaments', () => {

    beforeEach(function () {
      cy.login('lipemsilveira@hotmail.com', '686308mm');
    })
  
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