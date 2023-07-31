describe('Custom commands', () => {

    it.skip("handling links", () =>{

        cy.visit("https://demo.nopcommerce.com/")

        // direct click
        //cy.get("img[title='Show details for Apple MacBook Pro 13-inch']").click()

        //by custom command
        cy.clickLink("Apple MacBook Pro 13-inch")

        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    })

    it.skip("overwriting existing command", () =>{

        // not work its Part 17: Cypress E2E Web Automation | How To Create Custom commands
        cy.visit("https://demo.nopcommerce.com/")
        //by custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')

    })

    it("login command", () =>{
        //.ico-login
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink('Log in') //custom command
        cy.loginapp("infinitidev21feb23@gmail.com","test123")

        cy.get('.ico-account').should('have.text', 'My account')
    })
})