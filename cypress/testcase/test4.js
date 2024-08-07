/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get("#alertbtn").click()
cy.on("window:alert", str =>{   expect(str).to.contains("Hello") })
cy.get('[value="Confirm"]').click()
cy.on("window:confirm", check =>{   expect(check).to.contains("confirm") })










})   
})