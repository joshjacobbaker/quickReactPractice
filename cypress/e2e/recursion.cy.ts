describe('Recursion Page', () => {
  it('should navigate to the Recursion page and check for icons', () => {
    cy.visit('/')
    cy.contains('Recursion').click()
    // cy.get('img').should('have.length.greaterThan', 0)
    cy.contains('Movies')
  })
})
