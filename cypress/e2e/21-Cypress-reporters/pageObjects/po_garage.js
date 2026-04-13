class GaragePage {
    get addCarButton() {
        return cy.get('.panel-page_heading > .btn-primary');
    }

    get brandSelect() {
        return '#addCarBrand';
    }

    get modelSelect() {
        return '#addCarModel';
    }

    get mileageInput() {
        return '#addCarMileage';
    }

    get addButton() {
        return '.modal-footer > .btn-primary';
    }

    clickAddCarButton() {
        this.addCarButton.click();
    }

    selectBrand(brand) {
        cy.get(this.brandSelect).select(brand);
    }

    selectModel(model) {
        cy.get(this.modelSelect).select(model);
    }

    enterMileage(mileage) {
        cy.get(this.mileageInput).type(mileage);
    }

    clickAdd() {
        cy.get(this.addButton).click();
    }

}

export default GaragePage;