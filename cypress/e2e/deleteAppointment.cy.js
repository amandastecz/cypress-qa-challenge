import AppointmentManagementPage from "../pages/AppointmentManagementPage";
import { faker } from "@faker-js/faker";
import moment from "moment";

describe('Delete appointment', () => {
    describe('Given one or more existent appointment,', () => {
        const appointmentManagementPage = new AppointmentManagementPage();
        beforeEach(() => {
            appointmentManagementPage.visit();
        });
        it('when click on the delete button intending delete the appointment, should delete the appointment and display a success message', () => {
            const input = {
                petName: faker.animal.dog(),
                ownerName: faker.person.firstName(),
                date: moment().add(1, 'day').format('YYYY-MM-DD'),
                time: moment().add(1, 'hour').format('HH:mm'),
                symptoms: faker.lorem.lines(1)
            };
            appointmentManagementPage.add(input);
            appointmentManagementPage.delete(input);
            cy.get(appointmentManagementPage.h2DynamicTitle).should('contain', 'There are no appointments');
          })
    })
  })