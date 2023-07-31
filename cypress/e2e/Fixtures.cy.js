describe('MyTestSuite', () => {

    //Direct access
    it.skip("Fixtures file data", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('orangehrm').then( (data)=>{

            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',data.expected)
        })
    })

     //Access through Hook -- for multiple 'it' blocks
     let userData;
     before(()=>{
        cy.fixture("orangehrm").then((data)=>{
            userData = data
        })
     })
     it("Fixture file data by hook", () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get("input[placeholder='Username']").type(userData.username)
        cy.get("input[placeholder='Password']").type(userData.password)
        cy.get("button[type='submit']").click()

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text',userData.expected)
       

     })
})