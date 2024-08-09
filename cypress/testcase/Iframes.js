/// <reference types="cypress-iframe" />
/// <reference types="Cypress" />
import 'cypress-iframe'
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 

// MOUSE HOVER
// cy.get('.mouse-hover-content').invoke('show')
// CYPRESS HAS HIDEN ELEMNT FUNCTION
cy.frameLoaded('#courses-iframe')
cy.iframe().find('div.navbar-collapse [href="mentorship"]').eq(0).click()


 
 
})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
