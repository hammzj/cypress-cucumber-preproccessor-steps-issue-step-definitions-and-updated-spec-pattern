import {Given} from '@badeball/cypress-cucumber-preprocessor'

Given('foo', function () {
    cy.log('foo B')
    this.foo = 'B'
})
