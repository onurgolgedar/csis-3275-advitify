describe('Navigation', () => {
    it('should navigate to software section', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a link with an href attribute containing "signIn" and click it
      cy.get('a[href*="categories/Software"]').first().click()
   
      // The new url 
      cy.url().should('include', 'categories/Software')
   
      // The new page should contain an h2 with "Sign In"
      //cy.get('h1').contains('something')
    })
  })