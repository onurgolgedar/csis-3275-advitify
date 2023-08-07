describe('Navigation', () => {
    it('should login and go to Zoom meeting', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
    
    // Find a link with an href attribute containing "signIn" and click it
    cy.get('a[href*="signIn"]').click()
    
    // The new url should include "/signIn"
    cy.url().should('include', '/signIn')

    // The new page should contain an h2 with "Sign In"
    cy.get('h2').contains('Sign In')

     // Enter username and password in form inputs
    cy.get("input[id=username]").type('admin');
    cy.get("input[id=password]").type('123456').type("{enter}"); // '{enter}' submits the form

    // Find a link with an href attribute containing "signIn" and click it
    cy.get('a[href*="/consultant_profile/tconsultant2"]').first().click()
   
    // The new url 
    cy.url().should('include', '/consultant_profile/tconsultant2')

    // The new page should contain an h2 with "Sign In"
    cy.get('h2').contains('Profile')

    // Find a link with an href attribute containing "signIn" and click it
    cy.get('a[href*="/api/zoom/oauth/auth"]').first().click()

    //The new url
    cy.url().should('include', '/online-session/metting')

    // The new page should contain an h2 with "Sign In"
    cy.get('div').should('have.class','online-session_container__Ui7VO')

    })
  })