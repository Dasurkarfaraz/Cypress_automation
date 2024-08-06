/// <reference types="Cypress" />


describe("Webite Lauch"  ,() =>{

it("testcase1",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("CA")
    cy.get(".product:visible").should('have.length',4)
    cy.get('.products').find('.product').should('have.length',4)
    

})



})