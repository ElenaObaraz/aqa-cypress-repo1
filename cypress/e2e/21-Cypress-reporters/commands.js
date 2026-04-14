Cypress.Commands.add('login', (email, password) => {
  cy.get('button.header_signin').click();
  cy.get('#signinEmail').clear().type(email, { delay: 100 });
  cy.get('#signinPassword').clear().type(password, { sensitive: true }, { delay: 100 });
  cy.get('.modal-footer > .btn-primary').click(); 
   
});

Cypress.Commands.add('createExpense', (carId, date, mileage, liters, totalCost) => {
  return cy.request({
    method: 'POST',
    url: '/api/expenses',
    body: {
      carId: carId,
      reportedAt: date,
      mileage: mileage,
      liters: liters,
      totalCost: totalCost
    }
  });
});