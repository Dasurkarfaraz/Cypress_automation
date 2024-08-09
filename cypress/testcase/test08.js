/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 

// MOUSE HOVER
// cy.get('.mouse-hover-content').invoke('show')
// CYPRESS HAS HIDEN ELEMNT FUNCTION
cy.contains('Top').click({force: true})
cy.url().should('include','top')


 
 
})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
