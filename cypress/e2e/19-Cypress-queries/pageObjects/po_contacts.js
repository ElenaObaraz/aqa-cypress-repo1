class Contacts {

    get contactsSection () {
        return cy.get('#contactsSection');
    }

    get facebookLink () {
        return cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]');
    }

    get telegramLink () {
        return cy.get('a[href="https://t.me/ithillel_kyiv"]');
    }

    get youtubeLink () {
        return cy.get('a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]');
    }

    get instagramLink () {
        return cy.get('a[href="https://www.instagram.com/hillel_itschool/"]');
    }

    get linkedinLink () {
        return cy.get('a[href="https://www.linkedin.com/school/ithillel/"]');
    }

    get websiteLink () {
        return cy.get('a[href="https://ithillel.ua"]');
    }

    get emailLink () {
        return cy.get('a[href="mailto:developer@ithillel.ua"]');
    }
}

export default new Contacts();