/// <reference types="cypress" />

import  registration from '../pageObjects/po_registration';

describe('Sing Up', () => {    

    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }});
    });

    it('Should display the Sign up button', () => {
        registration.signUpButton.should('be.visible');
    });

    it('Correct button text', () => {
        registration.signUpButton.should('have.text', 'Sign up');
    });

    it('Open signup page', () => {
        registration.signUpButton.click();
        cy.get('.modal-content').should('be.visible');
    });
});