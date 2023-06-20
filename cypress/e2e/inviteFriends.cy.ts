describe('All departaments', () => {

    beforeEach(function () {
        cy.login('lipemsilveira@hotmail.com', '686308mm')
    })

    it('Invite Code', () => {

        const invitation_code = 'FEL991'

        cy.get('a[href="/convide-e-ganhe/"] button')
            .click()
        cy.url().should('include', `${Cypress.config('baseUrl')}/convide-e-ganhe`)
        cy.get('span[id="referral-code"]')
            .should('have.text', invitation_code)
    });
})