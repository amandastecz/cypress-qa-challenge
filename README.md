# qa-challenge

## Introduction
This project uses the Object Model Page test pattern and the Cypress test framework to perform tests on the e2e layer in a frontend React application.

## Setup

### Development setup

- [NodeJS 20.3.1 or higher versions](https://nodejs.org/en)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress#Features)
- [Docker](https://www.docker.com/) 

### How to run the frontend application locally
Run:
```
docker-compose up
```
After success, open other terminal and run:
```
npm run container:exec
```
Now you have the frontend development environment React application running at http://localhost:3000/ 

### How to run the tests locally

Run: 
```
npm install
```

After installed all dependencies, to exec cypress in headless mode, run:
```
npm run test
```
Or, if you prefer to run the tests in the cypress dashboard, run:
```
npm run test:ide
```

## About the Author

**Amanda C. Stecz Antunes.**
- Software Quality Engineer.
- Education: Bachelor's Degree Computer Science.
- Experience: 6 years as a QA.

Technical Knowledge:

- Languages: Typescript, Javascript.
- Automation Frameworks: Cypress, TestCafe, Jest, Supertest, Postman.
- CI/CD Tools: Jenkins, Kubernetes.
- Container: Docker.
- Cloud: AWS.
- Task management: Azure Devops, Monday, ORA, Kanbanize.
- Version Control: GitHub, Gitlab.
- Database: MongoDB, Postgres, MySQL.

LinkedIn: https://www.linkedin.com/in/amanda-c-stecz-antunes-2b298b123/