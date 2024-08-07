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
//Dynanic drop down 

cy.get('#autocomplete').type('IND');
cy.get('.ui-menu-item div').each(($e1,index,$list) => {
    if ($e1.text()=='India') {
        cy.wrap($e1).click();
    }

})

//assertio to check india value 
cy.get('#autocomplete').should('have.value','India')


// Dynainc Element Diplay and hide from screen assert 
cy.get('#displayed-text').should('be.visible')
cy.get('[value="Hide"]').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('[value="Show"]').click()
cy.get('#displayed-text').should('be.visible')


//radio button click
cy.get('[value="radio1"]').check().should('be.checked') 

}  )
 
 
    
}  )