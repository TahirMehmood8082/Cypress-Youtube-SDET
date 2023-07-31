describe("My ScreenShot Videos Suite", ()=>{

    it("Capture ScreenShot & Videos", ()=>{
    
        cy.visit("https://demo.opencart.com/")
        // cy.screenshot("By Screenshot command")
        // cy.wait(5000)
        // cy.get("img[title='Your Store']").screenshot("logo")

        //Automatically capture screenshot & videos on failure - only by cli or terminal

        cy.get("li:nth-child(7) a:nth-child(1)").click() //cameras link
        cy.get("div[id='content'] h2").should('have.text',"Tablets") // wrong assertion by purpose to fail
    })
})