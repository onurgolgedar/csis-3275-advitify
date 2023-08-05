describe('Navigation', () => {
    it('should login and go to dashboard page', () => {
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

    // The new url should include 
    cy.url().should('include', 'http://localhost:3000/')

     // The new page should contain 
     cy.get('h1').contains('Advitify is an IT consulting platform that connects people with professionals')

    //click the profile button
    cy.get('button[class*="NavBar_btn__Stmt9"]').click()

    // The new url should include "/signIn"
    cy.url().should('include', '/dashboard/consultant/undefined')

    // The new page should contain an h2 with "dashboard"
    cy.get('h2').contains('DASHBOARD')

    })
  })