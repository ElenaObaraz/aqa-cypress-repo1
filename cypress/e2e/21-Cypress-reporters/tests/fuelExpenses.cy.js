/// <reference types="cypress" />
import '../commands';
import ExpensesPage from '../pageObjects/po_fuelExpenses';

describe('Sing Up', () => { 
      const expensesPage = new ExpensesPage();

    beforeEach(() => {       
        cy.visit('/');
        cy.login(Cypress.env('USER_LOGIN'), Cypress.env('USER_PASSWORD'));        
    });

    it('Expense added successfully', () => {
        expensesPage.clickFuelExpensesButton();
        cy.url('/expenses');
        expensesPage.clickAddAnExpenseButton();
        expensesPage.selectVehicle(0);
        expensesPage.enterDate('12.04.2026');
        expensesPage.enterMileage(15000);
        expensesPage.enterLiters(50);
        expensesPage.enterTotalCost(100);
        expensesPage.clickAddButton();
    });
});