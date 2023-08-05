describe('Navigation', () => {
    it('should navigate to the Sign Up page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a link with an href attribute containing "signIn" and click it
      cy.get('a[href*="signUpMember"]').click()
   
      // The new url should include "/signIn"
      cy.url().should('include', '/signUpMember')
   
      // The new page should contain an h2 with "Sign In"
      cy.get('h1').contains('Become an Advitify Member')
    })
  })