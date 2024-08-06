/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('be.visible').and('have.value','option1')
cy.get('input[type="checkbox"]').check(['option2','option3'])

//static drop down 
cy.get('select').select('option2').should('have.value','option2')
//Dynanic op down 


}  )
 
 
 
}  )