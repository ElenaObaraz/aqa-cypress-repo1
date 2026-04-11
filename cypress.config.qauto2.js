const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
    env: {
      USER_LOGIN: 'yononow893@nyspring.com',
      USER_PASSWORD: 'Yononow893',
    },
    reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
    },
  },
  
});