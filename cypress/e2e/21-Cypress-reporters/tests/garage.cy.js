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

        cy.intercept('POST', '/api/cars').as('createCar'); 

        garagePage.clickAddCarButton();        
        garagePage.selectBrand('Audi');
        garagePage.selectModel('TT');
        garagePage.enterMileage(100);
        garagePage.clickAdd();

        cy.wait('@createCar').then(interception => {
            expect(interception.response.statusCode).to.eq(201);

            const carId = interception.response.body.data.id;
            cy.log('Created car ID:', carId);

            cy.request('GET', '/api/cars').then(response => {
            expect(response.status).to.eq(200); 

            const createdCar = response.body.data.find(car => car.id === carId);
            expect(createdCar.brand).to.eq('Audi');
            expect(createdCar.model).to.eq('TT');
            expect(createdCar.mileage).to.eq(100);
            });
        });       
    });

    it('Expense added successfully via API', () => {

        cy.url('/garage');
  
        cy.intercept('POST', '/api/cars').as('createCar');
  
        garagePage.clickAddCarButton();
        garagePage.selectBrand('Audi');
        garagePage.selectModel('TT');
        garagePage.enterMileage(100);
        garagePage.clickAdd();
  
        cy.wait('@createCar').then(interception => {
            expect(interception.response.statusCode).to.eq(201);

            const carId = interception.response.body.data.id;
            cy.log('Created car ID:', carId);
    
            cy.createExpense(
                carId,
                '2026-04-13',
                15000,
                50,
                100
            ).then(response => {
      
                expect(response.status).to.eq(200);
                expect(response.body.data.carId).to.eq(carId);
                expect(response.body.data.mileage).to.eq(15000);
                expect(response.body.data.liters).to.eq(50);
                expect(response.body.data.totalCost).to.eq(100);
            });
        });
    });
});