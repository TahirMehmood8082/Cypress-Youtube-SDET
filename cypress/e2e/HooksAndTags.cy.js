// hooks: before after beforeEach afterEach
// tags: only skip

describe("MyTestSuite", () =>{

    before(()=>{
        cy.log("*****************   Launch App  ********************")
    })

    after(()=>{
        cy.log("*****************   Close App  ********************")
    })

    beforeEach(()=>{
        cy.log("*****************   Login  ********************")
    })

    afterEach(()=>{
        cy.log("*****************   Logout  ********************")
    })

    it('Search', ()=>{

        cy.log("*****************   Search  ********************")
    }) 

    it.skip('Advanced Search', ()=>{

        cy.log("*****************   Advanced Search  ********************")

    }) 

    it.only('Listing Products', ()=>{

        cy.log("*****************   Listing Products  ********************")

    }) 

})