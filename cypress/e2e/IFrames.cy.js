import 'cypress-iframe'
describe('Handle frames', () => {

    it.skip("Approach - 01", () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe") 

        const iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("shall come{ctrl+a}").should('have.text','shall come')

        cy.get("[aria-label='Bold']").click() // click link
        
    
    })

    it.skip("Approach - 02 custom cmd", () =>{

        cy.visit("https://the-internet.herokuapp.com/iframe") 

        cy.getIframe("#mce_0_ifr").clear().type("shall come{ctrl+a}").should('have.text','shall come')

        cy.get("[aria-label='Bold']").click() // click link
        
    
    })

    it("Approach - 03 cypress-iframe plugin new-one", () =>{

        // Run npm install -D cypress-iframe
        // import cypress-iframe'
        cy.visit("https://the-internet.herokuapp.com/iframe") 

        cy.frameLoaded("#mce_0_ifr") // Load the frame
        
        cy.iframe("#mce_0_ifr").clear().type("shall come{ctrl+a}").should('have.text','shall come')

        cy.get("[aria-label='Bold']").click() // click link
        
    
    })
})