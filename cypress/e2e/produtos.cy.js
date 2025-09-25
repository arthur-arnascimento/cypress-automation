/// <reference types = "cypress" />

describe('', () => {
    beforeEach('Visitando Url', () => {
        cy.limparCache()
        cy.visit('produtos')
    })

    afterEach('Evidência do teste', () => {
        cy.screenshot()
    })

    it('Deve selecionar um produto na lista', () => {
        cy.contains('Apollo Running Short').click()
    })

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

    it('Deve adicionar um produto no carrinho - Usando commands', () => {
        cy.adicionarProdutoCarrinho('Ariel Roll Sleeve Sweatshirt', 'XL', 'Green', 3)
    })

    it('Deve adicionar um produto no carrinho - Usando commands', () => {
        cy.adicionarProdutoCarrinho('Ajax Full-Zip Sweatshirt', 'XS', 'Red', 2)
    })
})