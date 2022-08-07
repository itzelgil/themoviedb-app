///<reference types="Cypress" />

describe('App Component Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('testing', () => {
        cy.get('input').type('Cypress test')
        cy.get('')
    })
})