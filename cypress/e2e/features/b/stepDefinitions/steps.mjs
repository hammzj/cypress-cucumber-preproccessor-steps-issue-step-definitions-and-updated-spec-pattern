import {Given} from '@badeball/cypress-cucumber-preprocessor'

Given('foo becomes B', function () {
    cy.log('foo B')
    this.foo = 'B'
})
