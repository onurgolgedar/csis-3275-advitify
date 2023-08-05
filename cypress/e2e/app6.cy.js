describe('Navigation', () => {
    it('should navigate to consultant profile', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a link with an href attribute containing "signIn" and click it
      cy.get('a[href*="/consultant_profile/tconsultant"]').first().click()
   
      // The new url 
      cy.url().should('include', '/consultant_profile/tconsultant')
   
      // The new page should contain an h2 with "Sign In"
      cy.get('h2').contains('Profile')
    })
  })