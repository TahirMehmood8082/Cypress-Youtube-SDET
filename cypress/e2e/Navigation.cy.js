describe("My Navigation Suite", ()=>{

    it("Navigation Test", ()=>{

        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', "Your Store")  //Home Page

        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text', "Cameras") //cameras

        cy.go("back") // go back to home
        cy.title().should('eq',"Your Store")

        cy.go("forward") // go back to home
        cy.get("div[id='content'] h2").should('have.text', "Cameras") //cameras

        cy.go(-1) // home
        cy.title().should('eq',"Your Store")

        cy.go(1) // home
        cy.get("div[id='content'] h2").should('have.text', "Cameras") //cameras

        cy.reload()
    })
})