/// <reference types="cypress" />
import '../commands';

describe('Login page', () => {    
    

    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }});
    });

    it('Successful login', () => {
        cy.login('toseto3873+12@smkanba.com', '123A456a789');
    });
});