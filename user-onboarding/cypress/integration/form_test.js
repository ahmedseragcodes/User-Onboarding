


describe ("End to End Testing For User Onboarding", ()=>{
    // beforeEach(()=>{
    //     cy.visit("http://localhost:3000/");
    // });
    //variables for quick access 
    const nameInput=function(){ return cy.get("input[name='name']") };
    const emailInput=function(){ return cy.get("input[name='email']") };
    const passInput=function(){ return cy.get("input[name='password']") };
    const tosInput=function(){ return cy.get("input[name='termsOfService']") }
    const submitBtn=function(){ return cy.get("button[id='submitBtn']") };
    

    it("ensuring name can be input", function(){
        
        //input verification tests 
        nameInput().should("exist");
        nameInput().should("have.value")
        nameInput().check("value")

        emailInput().should("exist");
        emailInput().should("have.value")
        emailInput().check("value")
        
        passInput().should("exist");
        passInput().should("have.value")
        nameInput().check("value")
        
    })
    it("Submit button should exist", function(){

        //submit button 
        submitBtn().should("exist");
    })
    it("TOS should be checked upon submission", function(){
        tosInput().should("have.value", "false")
        tosInput.check("value").should("have.value", "true");

    })

})