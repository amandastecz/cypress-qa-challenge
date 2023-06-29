import AppointmentManagementPage from "../pages/AppointmentManagementPage";
import { faker } from "@faker-js/faker";
import moment from "moment";

describe('Create appointment', () => {
    describe('Given a form', () => {
        const appointmentManagementPage = new AppointmentManagementPage();
        beforeEach(() => {
            appointmentManagementPage.visit();
        });

    it('when fill all required fields and click on the submit button, should create a new appointment', () => {
        const input = {
            petName: faker.animal.dog(),
            ownerName: faker.person.firstName(),
            date: moment().add(1, 'day').format('YYYY-MM-DD'),
            time: moment().add(1, 'hour').format('HH:mm'),
            symptoms: faker.lorem.lines(1)
        };
        appointmentManagementPage.add(input);
        cy.get(appointmentManagementPage.appointment).within(() => {
            cy.get('p span').should('contain', input.petName);
        })
    });

    it('when partially filling required fields and click on the submit button, should not create a new appointment and should display a error message', () => {
        const input = {
            petName: '{backspace}',
            ownerName: faker.person.firstName(),
            date: moment().add(1, 'day').format('YYYY-MM-DD'),
            time: moment().add(1, 'hour').format('HH:mm'),
            symptoms: faker.lorem.lines(1)
        };
        appointmentManagementPage.add(input);
        cy.get(appointmentManagementPage.displayMessage).should('have.class', 'alert-error');
    });

    it('when exist one or more appointment, fill all required fields with a different appointment and click on submit button, should be able to create more than one appointment', () => {
        const inputs = [{
            petName: faker.animal.dog(),
            ownerName: faker.person.firstName(),
            date: moment().add(1, 'day').format('YYYY-MM-DD'),
            time: moment().add(1, 'hour').format('HH:mm'),
            symptoms: faker.lorem.lines(1)
        },
        {
            petName: faker.animal.dog(),
            ownerName: faker.person.firstName(),
            date: moment().add(2, 'day').format('YYYY-MM-DD'),
            time: moment().add(1, 'hour').format('HH:mm'),
            symptoms: faker.lorem.lines(1)
        }];
        inputs.forEach(appointment => {
            appointmentManagementPage.add(appointment);
        });
        cy.get(appointmentManagementPage.appointment).should('have.length', 2);
    });
    })
})