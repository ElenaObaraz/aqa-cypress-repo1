/// <reference types="cypress" />
import '../commands';
import GaragePage from '../pageObjects/po_garage';

describe('Sing Up', () => { 
    const garagePage = new GaragePage();   

    beforeEach(() => {       
        cy.visit('/');
        cy.login(Cypress.env('USER_LOGIN'), Cypress.env('USER_PASSWORD'));        
    });

    it('Car added successfully', () => {
        cy.url('/garage');        
        garagePage.clickAddCarButton();        
        garagePage.selectBrand('Audi');
        garagePage.selectModel('TT');
        garagePage.enterMileage(100);
        garagePage.clickAdd();        
    });
});