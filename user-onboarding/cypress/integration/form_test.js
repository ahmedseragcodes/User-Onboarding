const { beforeEach } = require("mocha")

describe ("End to End Testing For User Onboarding", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    });
    //variables for quick access 
    const nameInput=function(){ cy.get("input[name='name']") };
    const emailInput=function(){ cy.get("input[name='email']") };
    const passInput=function(){ cy.get("input[name='password']") };
    const submitBtn=function(){ cy.get("button[id='submitBtn']") };

    it("ensuring name can be input", function(){
        
        //input verification tests 
        nameInput().should("exist");
        emailInput().should("exist");
        passInput().should("exist");
    })

})