describe('Navigation', () => {
    it('should navigate to Home Page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/consultant_profile/1')
   
      // Find a link with an href attribute containing "signIn" and click it
      cy.get('a[href*="/"]').first().click()
   
      // The new url 
      cy.url().should('include', 'http://localhost:3000')
   
      // The new page should contain an h2 with "Sign In"
      cy.get('h1').contains('Advitify is an IT consulting platform that connects people with professionals')
    })
  })