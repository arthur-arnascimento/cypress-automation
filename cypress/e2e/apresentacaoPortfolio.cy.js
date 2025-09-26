/// <reference types = "cypress" />
import EnderecoPage from "../support/page-objects/endereco.page"

const perfil = require('../fixtures/perfil.json')
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Login', () => {
    // Utilizando commands no cypress
    before('Criando cadastro para teste', () => {
        cy.visit('minha-conta')
        cy.cadastro()
    })

    beforeEach('Visitando Url', () => {
        cy.limparCache()
        cy.visit('minha-conta')
    })

    // Salvando evidência
    afterEach('Evidência do teste', () => {
        cy.screenshot()
    })

    // Utilizando variável global - Cypress.env
    it('Deve fazer login com sucesso - Usando commands', () => {
        cy.login()
    })

    // Utilizando arquivo de dados
    it('Deve fazer login com sucesso - Arquivo de dados', () => {
        cy.get('#username').type(perfil.email)
        cy.get('#password').type(perfil.senha, { log: false })
        cy.get('[name="login"]').click()
    })

    // Utilizando massa de dados em varios testes
    it('Deve fazer login com falha - Usando fixture', () => {
        cy.fixture('perfil2').then((usuarios) => {
            cy.wrap(usuarios).each((dados) => {
                cy.get('#username').clear().type(dados.email)
                cy.get('#password').clear().type(dados.senha)
                cy.get('[name="login"]').click()
                cy.get('.woocommerce-error')
                    .should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
            })
        })
    })
})

describe(' Deve adicionar um endereço de faturamento', () => {
    // Utilizando commands no cypress
    beforeEach('Visitando Url', () => {
        cy.visit('minha-conta')
        cy.cadastro()
    })

    // Utilizando Page Object
    it('Deve fazer um o registro e um cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Arthur', 'Nascimento', 'Google', 'Brasil', 'São Patricio', '987', 'São Paulo', 'São Paulo', '01000100', '11987654321', 'arthur@teste.com')
    })

    // Utilizando Page Object + Massa de dados
    it('Deve fazer um o registro e um cadastro de faturamento com sucesso - Usando arquivos de dados', () => {
        const randomDados = Math.floor(Math.random() * 3)

        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[randomDados].nome,
            dadosEndereco[randomDados].sobrenome,
            dadosEndereco[randomDados].empresa,
            dadosEndereco[randomDados].pais,
            dadosEndereco[randomDados].endereco,
            dadosEndereco[randomDados].numero,
            dadosEndereco[randomDados].cidade,
            dadosEndereco[randomDados].estado,
            dadosEndereco[randomDados].cep,
            dadosEndereco[randomDados].telefone,
            dadosEndereco[randomDados].email
        )
    })
})

describe('Deve adicionar um produto ao carrinho', () => {
    beforeEach('Visitando Url', () => {
        cy.visit('produtos')
    })

    afterEach('Evidência do teste', () => {
        cy.screenshot()
    })

    // Utilizando de forma simples
    it('Deve adicionar um produto no carrinho', () => {
        const quantidade = 3

        cy.get('[class="product-block grid"]').contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.wait(1000)
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('[class="input-text qty text"]').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    }) 

    // Utilizando commands passando parametros
    it('Deve adicionar um produto no carrinho - Usando commands', () => {
        cy.adicionarProdutoCarrinho('Ajax Full-Zip Sweatshirt', 'XS', 'Red', 2)
    })
})