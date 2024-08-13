/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('Multiple Window handle',function() {
 
 // New window automation in cypress
cy.visit("https://the-internet.herokuapp.com/windows")
// usse jquery tool for automtion 
cy.get('.example > a').invoke('removeAttr','target').click()











})   
})