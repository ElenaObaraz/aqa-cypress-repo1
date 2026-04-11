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
        registration.signUpPage.should('be.visible');
    });

    //lesson20
    it('Title is in the SignUp page', () => {
        registration.signUpButton.click();        
        cy.get('h4.modal-title').should('have.text', 'Registration');
    });

    it('Register button is disabled', () => {
        registration.signUpButton.click();
        cy.get('.modal-footer > button').should('have.text', 'Register').and('be.disabled');
    });

    it('Successful registration', () => {
        registration.signUpButton.click();
        registration.signUpNameField.type('Joe');
        registration.signUpLastNameField.type('Jonson');
        registration.signUpEmailField.type('toseto3873+12@smkanba.com');
        registration.signUpPasswordField.type('123A456a789');
        registration.signUpReEnterPasswordField.type('123A456a789');
        cy.get('.modal-footer > button').click();
        cy.contains('Garage').should('be.exist');
    });

    context('Field Name', () => {
        it('Should check whether an error message appears when the field is empty', () => {
            registration.signUpButton.click();
            registration.signUpNameField.should('be.visible').and('not.have.text');
            registration.signUpNameField.click();
            registration.signUpLastNameField.click();
            cy.contains('Name required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });

        it('Should check whether an error message appears when incorrect data is entered', () => {
            registration.signUpButton.click();
            registration.signUpNameField.type(12);
            registration.signUpLastNameField.click();
            cy.contains('Name is invalid').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });

        it('Should check whether an error message appears when incorrect data length is entered', () => {
            registration.signUpButton.click();
            registration.signUpNameField.type(1);
            registration.signUpLastNameField.click();
            cy.contains('Name has to be from 2 to 20 characters long').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });
    });

    context('Field Last Name', () => {
        it('Should check whether an error message appears when the field is empty', () => {
            registration.signUpButton.click();
            registration.signUpLastNameField.should('be.visible').and('not.have.text');
            registration.signUpLastNameField.click();
            registration.signUpNameField.click();
            cy.contains('Last name required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });

        it('Should check whether an error message appears when incorrect data is entered', () => {
            registration.signUpButton.click();
            registration.signUpLastNameField.type(12);
            registration.signUpNameField.click();
            cy.contains('Last name is invalid').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });

        it('Should check whether an error message appears when incorrect data length is entered', () => {
            registration.signUpButton.click();
            registration.signUpLastNameField.type(1);
            registration.signUpNameField.click();
            cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });
    });

    context('Field Email', () => {
        it('Should check whether an error message appears when incorrect data is entered', () => {
            registration.signUpButton.click();
            registration.signUpEmailField.type(12);            
            registration.signUpNameField.click();
            cy.contains('Email is incorrect').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });

        it('Should check whether an error message appears when the field is empty', () => {
            registration.signUpButton.click();
            registration.signUpEmailField.should('be.visible').and('not.have.text');
            registration.signUpEmailField.click();
            registration.signUpNameField.click();
            cy.contains('Email required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });
    });

    context('Field Password', () => {
        it('Should check whether an error message appears when incorrect data is entered', () => {
            registration.signUpButton.click();
            registration.signUpPasswordField.type(12);            
            registration.signUpNameField.click();
            cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });

        it('Should check whether an error message appears when the field is empty', () => {
            registration.signUpButton.click();
            registration.signUpPasswordField.should('be.visible').and('not.have.text');
            registration.signUpPasswordField.click();
            registration.signUpNameField.click();
            cy.contains('Password required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });
    });

    context('Field Re-enter password', () => {
        it('Should check whether an error message appears when the field is empty', () => {
            registration.signUpButton.click();
            registration.signUpReEnterPasswordField.should('be.visible').and('not.have.text');
            registration.signUpReEnterPasswordField.click();
            registration.signUpNameField.click();
            cy.contains('Re-enter password required').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });

        it('Should check whether an error message appears if the value does not match the “Password” value', () => {
            registration.signUpButton.click();
            registration.signUpPasswordField.type('123A456a789');
            registration.signUpReEnterPasswordField.type('123A456a78');
            registration.signUpNameField.click();
            cy.contains('Passwords do not match').should('be.visible').and('have.css', 'color', 'rgb(220, 53, 69)');
        });
    });
});