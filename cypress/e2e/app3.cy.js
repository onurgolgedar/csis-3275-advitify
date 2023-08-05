describe('Navigation', () => {
    it('should navigate to Zoom Meeting', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/consultant_profile/1')
   
      // Find a link with an href attribute containing "signIn" and click it
      cy.get('a[href*="/api/zoom/oauth/auth"]').first().click()
   
      // The new url 
      cy.url().should('match', 'https://zoom.us/signin?/./')
   
      // The new page should contain an h2 with "Sign In"
      cy.get('button').contains('Sign In')
    })
  })