import {Given} from '@badeball/cypress-cucumber-preprocessor'

Given('foo', function () {
    cy.log('foo A')
    this.foo = 'A'
})
