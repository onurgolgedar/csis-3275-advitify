describe('Navigation', () => {
    it('should signup and then login', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
    
    // Find a link with an href attribute containing "signIn" and click it
    cy.get('a[href*="/signUpMember"]').click()
    
    // The new url should include "/signIn"
    cy.url().should('include', '/signUpMember')

    // The new page should contain an h2 with "Sign In"
    cy.get('h1').contains('Become an Advitify Member')

     // Enter username and password in form inputs
    cy.get("input[id=username]").type('studentTest');
    cy.get("input[id=email]").type('student@douglascollege.ca');
    cy.get("input[id=password]").type('studentTest').type("{enter}"); // '{enter}' submits the form

    // The new url should include 
    cy.url().should('include', 'http://localhost:3000/')

     // The new page should contain 
     cy.get('h1').contains('Advitify is an IT consulting platform that connects people with professionals')

  // Find a link with an href attribute containing "signIn" and click it
  cy.get('a[href*="signIn"]').click()
    
  // The new url should include "/signIn"
  cy.url().should('include', '/signIn')

  // The new page should contain an h2 with "Sign In"
  cy.get('h2').contains('Sign In')

   // Enter username and password in form inputs
  cy.get("input[id=username]").type('studentTest');
  cy.get("input[id=password]").type('studentTest').type("{enter}"); // '{enter}' submits the form

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