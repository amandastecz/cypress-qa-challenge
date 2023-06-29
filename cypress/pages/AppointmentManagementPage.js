export default class AppointmentManagementPage{
    constructor(){
        this.url = Cypress.env('base_url');
        this.inputPetName = '[data-testid="pet"]';
        this.inputOwnerName = '[data-testid="owner"]';
        this.inputDate = '[data-testid="date"]';
        this.inputTime = '[data-testid="time"]';
        this.inputSymptoms = '[data-testid="symptoms"]';
        this.buttonSubmit = '[data-testid="btn-submit"]';
        this.displayMessage = '[data-testid="alert"]';
        this.h2DynamicTitle = '[data-testid="dynamic-title"]';
        this.appointment = '[data-testid="appointment"]';
        this.buttonDelete = '[data-testid="btn-delete"]';
    }

    add(params){
        cy.get(this.inputPetName).type(params.petName);
        cy.get(this.inputOwnerName).type(params.ownerName);
        cy.get(this.inputDate).type(params.date);
        cy.get(this.inputTime).type(params.time);
        cy.get(this.inputSymptoms).type(params.symptoms);
        cy.get(this.buttonSubmit).click();
    }

    delete(params){
        cy.get(this.appointment).within(() => {
            cy.get('p span').contains(params.petName);
            cy.get(this.buttonDelete).click();
        });
    }

    visit(){
        cy.visit(this.url);
    }
}