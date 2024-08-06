describe('The Home Page', () => {
  it('stester 1', () => {
    cy.visit('https://google.com') // change URL to match your dev URL
  })
  it('stester 2', () => {
    cy.visit('https://google.com') // change URL to match your dev URL
  })
  it('stester 3', () => {
    cy.visit('https://google.com') // change URL to match your dev URL
  })
})
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://youtube.com') // change URL to match your dev URL
  })
})
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq','OrangeHRM')
    // change URL to match your dev URL
  })
})

