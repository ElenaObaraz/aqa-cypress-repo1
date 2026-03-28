/// <reference types="cypress" />

import contacts from '../pageObjects/po_contacts';

describe('Contacts section', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space/', {auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }});
    });

    it('Should display the contacts section', () => {
        contacts.contactsSection.should('be.visible');
    });

    it('Should display social links', () => {
        contacts.facebookLink.should('be.visible');
        contacts.telegramLink.should('be.visible');
        contacts.youtubeLink.should('be.visible');
        contacts.instagramLink.should('be.visible');
        contacts.linkedinLink.should('be.visible');
    });

    it('Should display website and email links', () => {
        contacts.websiteLink.should('be.visible');
        contacts.emailLink.should('be.visible');
    });
});