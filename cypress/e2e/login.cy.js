/// <reference types = "cypress" />
const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade Login', () => {

    beforeEach('Visitando Url', () => {
        cy.visit('minha-conta')
    })

    afterEach('Evidência do teste', () => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('[name="login"]').click()
    })

    it('Deve fazer login com sucesso - Arquivo de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('[name="login"]').click()
    })

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(perfil.usuario)
            cy.get('#password').type(perfil.senha, {log: false})
            cy.get('[name="login"]').click()
        })
    })

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('123123')
        cy.get('[name="login"]').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})