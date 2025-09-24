/// <reference types = "cypress" />

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

describe('Visitando Url', () => {
    beforeEach('Visitando Url', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    })

    afterEach('Evidência do teste', () => {
        cy.screenshot()
    })

    it('Deve fazer um registro e alterar o nome e sobrenome', () => {
        const randomFirstName = faker.person.firstName()
        const randomLastName = faker.person.lastName()
        const randomEmail = faker.internet.email()
        const randomPassword = generatePassword()

        cy.get('.icon-user-unfollow').click()
        cy.location('pathname').should('eq', '/minha-conta/')
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
})