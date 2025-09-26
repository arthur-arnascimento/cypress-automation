/// <reference types = "cypress" />
import EnderecoPage from "../support/page-objects/endereco.page"

const dadosEndereco = require ('../fixtures/endereco.json')

describe('Deve adicionar um endereço de faturamento', () => {
    beforeEach('Visitando Url', () => {
        cy.limparCache()
        cy.visit('minha-conta')
        cy.cadastro()
    })

    it('Deve fazer um o registro e um cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Arthur', 'Nascimento', 'Google', 'Brasil', 'São Patricio', '987', 'São Paulo', 'São Paulo', '01000100', '11987654321', 'arthur@teste.com')
    })

    it.only('Deve fazer um o registro e um cadastro de faturamento com sucesso - Usando arquivos de dados', () => {
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