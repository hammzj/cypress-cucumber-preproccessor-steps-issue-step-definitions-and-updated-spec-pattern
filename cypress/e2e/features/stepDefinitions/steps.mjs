import {Given, Then} from '@badeball/cypress-cucumber-preprocessor'

Given('common', function () {
    cy.log('common')
})

Then('foo is {string}', function (text) {
    cy.wrap(this.foo).should('eq', text)
})
