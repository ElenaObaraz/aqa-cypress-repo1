Cypress.Commands.add('login', (email, password) => {
  cy.get('button.header_signin').click();
  cy.get('#signinEmail').clear().type(email, { delay: 100 });
  cy.get('#signinPassword').clear().type(password, { sensitive: true }, { delay: 100 });
  cy.get('.modal-footer > .btn-primary').click(); 
   
});