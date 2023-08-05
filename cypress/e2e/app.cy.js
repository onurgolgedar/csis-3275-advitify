describe('Navigation', () => {
    it('should navigate to the Sign In page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a link with an href attribute containing "signIn" and click it
      cy.get('a[href*="signIn"]').click()
   
      // The new url should include "/signIn"
      cy.url().should('include', '/signIn')
   
      // The new page should contain an h2 with "Sign In"
      cy.get('h2').contains('Sign In')
    })
  })