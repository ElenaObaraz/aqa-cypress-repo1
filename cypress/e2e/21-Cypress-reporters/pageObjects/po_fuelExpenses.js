class ExpensesPage {
    get fuelExpensesButton() {
        return cy.get('a[routerlink="expenses"]');
    }

    get addAnExpenseButton() {
        return cy.get('.item-group > .btn-primary');
    }

    get vehicleSelect() { 
        return '#addExpenseCar'; 
    }

    get dateInput() { 
        return '#addExpenseDate'; 
    }

    get mileageInput() { 
        return '#addExpenseMileage'; 
    }

    get litersInput() { 
        return '#addExpenseLiters'; 
    }

    get totalCostInput() { 
        return '#addExpenseTotalCost'; 
    }

    get addButton() { 
        return '.modal-footer > .btn-primary'; 
    }

    clickFuelExpensesButton() {
        this.fuelExpensesButton.click();
    }

    clickAddAnExpenseButton() {
        this.addAnExpenseButton.click();
    }

    selectVehicle(vehicleIndex) {
        cy.get(this.vehicleSelect).select(vehicleIndex);
    }

    enterDate(date) {
        cy.get(this.dateInput).clear().type(date);
    }

    enterMileage(mileage) {
        cy.get(this.mileageInput).clear().type(mileage);
    }

    enterLiters(liters) {
        cy.get(this.litersInput).clear().type(liters);
    }

    enterTotalCost(cost) {
        cy.get(this.totalCostInput).clear().type(cost);
    }

    clickAddButton() {
        cy.get(this.addButton).click();
    }
}

export default ExpensesPage;