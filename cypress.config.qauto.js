const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',    
    env: {
      USER_LOGIN: 'wagaf36200@parsitv.com',
      USER_PASSWORD: 'Wagaf36200',
    },

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: false,
      json: true
    }
  }
});