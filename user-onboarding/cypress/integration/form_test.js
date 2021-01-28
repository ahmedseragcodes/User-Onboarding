const { beforeEach } = require("mocha")

describe ("End to End Testing For User Onboarding", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    });

    const nameInput=function(){ cy.get("input[name='name']") };
    const textInput=function(){ cy.get("input[name='email']") };
})