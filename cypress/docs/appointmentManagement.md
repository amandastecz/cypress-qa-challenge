# Appointment Management Test Scenarios

## Create
### Implemented tests
- [X] Given a form, when fill all required fields and click on the submit button, should create a new appointment.
- [X] Given a form, when partially filling required fields and click on the submit button, should not create a new appointment and should display a error message.
- [X] Given a form, when exist one or more appointment, fill all required fields with a different appointment and click on submit button, should be able to create more than one appointment.
### Nice to have tests (improvements to react app)
- [] (SKIP) Given a form, when exist one or more appointment, fill all required fields with as an existent appointment and click on submit button, should not create a new appointment and should display a error message.
- [] (SKIP) Given a form, when fill all required fields but with a retroactive data, should not create a new appointment and should display a error message.

## Delete
### Implemented tests
- [X] Given one or more existent appointment, when click on the delete button intending delete the appointment, should delete the appointment and display a success message.
### Nice to have tests (improvements to react app)
- [] (SKIP) Given one or more existent appointment, when click on the delete button, should display a "yes/no" alert message asking if the user really wants to delete the appointment.