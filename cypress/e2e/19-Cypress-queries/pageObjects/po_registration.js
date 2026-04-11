class Registration {
    
    get signUpButton () {
        return cy.get('button.hero-descriptor_btn');
    }

    //lesson20
    get signUpPage () {
        return cy.get('.modal-content');
    }

    get signUpNameField () {
        return cy.get('#signupName');
    }

    get signUpLastNameField () {
        return cy.get('#signupLastName');
    }

    get signUpEmailField () {
        return cy.get('#signupEmail');
    }

    get signUpPasswordField () {
        return cy.get('#signupPassword');
    }

    get signUpReEnterPasswordField () {
        return cy.get('#signupRepeatPassword');
    }
}

export default new Registration();