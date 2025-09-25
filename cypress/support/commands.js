// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';

export function generatePassword(length = 12) {
    const upper = faker.string.alpha({ length: 1 }).toUpperCase();
    const lower = faker.string.alpha({ length: 1 }).toLowerCase();
    const number = faker.string.numeric(1);
    const symbol = faker.string.symbol();

    const rest = faker.internet.password(length - 4, false, /[A-Za-z0-9!@#$%^&*]/);

    const rawPassword = upper + lower + number + symbol + rest;
    return rawPassword.split('').sort(() => 0.5 - Math.random()).join('');
}

Cypress.Commands.add('limparCache', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
})

Cypress.Commands.add('cadastro', () => {
    const randomEmail = faker.internet.email()
    const randomPassword = generatePassword()

    Cypress.env('email', randomEmail)
    Cypress.env('senha', randomPassword)

    cy.get('#reg_email').type(randomEmail)
    cy.get('#reg_password').type(randomPassword)
    cy.get('[name="register"]').click()

    cy.wait(1000)
    cy.get('.page-title').should('be.visible')

    // cy.writeFile('cypress/fixtures/perfil.json', {
    //     email: randomEmail,
    //     senha: randomPassword
    // })
})

Cypress.Commands.add('login', () => {
    const usuario = Cypress.env('email')
    const senha = Cypress.env('senha')

    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('[name="login"]').click()
})

Cypress.Commands.add('cadastroCompleto', () => {
    const randomFirstName = faker.person.firstName()
    const randomLastName = faker.person.lastName()
    const randomEmail = faker.internet.email()
    const randomPassword = generatePassword()

    cy.get('#reg_email').type(randomEmail)
    cy.get('#reg_password').type(randomPassword)
    cy.get('[name="register"]').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.location('pathname').should('eq', '/minha-conta/edit-account/')
    cy.get('#account_first_name').type(randomFirstName)
    cy.get('#account_last_name').type(randomLastName)
    cy.get('[name="save_account_details"]').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
})

Cypress.Commands.add('adicionarProdutoCarrinho', (produto, tamanho, cor, quantidade) => {
    cy.get('[class="product-block grid"]').contains(produto).click()
    cy.wait(1000).get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('[class="input-text qty text"]').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “' + produto + '” foram adicionados no seu carrinho.')
})