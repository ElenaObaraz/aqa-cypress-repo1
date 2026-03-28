class Registration {
    
    get signUpButton () {
        return cy.get('button.hero-descriptor_btn');
    }
}

export default new Registration();