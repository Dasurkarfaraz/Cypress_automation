/// <reference types="Cypress" />


describe("Webite Lauch"  ,() =>{

it("testcase1",()=>{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get(".search-keyword").type("CA")
    cy.get(".product:visible").should('have.length',4)
    cy.get('.products').find('.product').should('have.length',4)
    cy.get('.products').find('.product').each(($el,index,$list) => {
        const textelement = $el.find('h4.product-name').text()
        if (textelement.includes("Cashwes")) {
            cy.wrap($el).find('button').click()
        }

    })
    cy.get('.brand').should('have.text','GREENKART')

})



})