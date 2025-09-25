/// <reference types = "cypress" />

describe ('', () => {
    beforeEach('Visitando Url', () => {
        cy.limparCache()
        cy.visit('minha-conta')
        cy.cadastro()
    })

    it ('Deve fazer um o registro e um cadastro de faturamento com sucesso', () => {

    })
})