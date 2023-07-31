import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe("Mouse Operations", () =>{

    it.skip('MouseHover', ()=>{

        cy.visit("https://demo.opencart.com/")

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible')

        // by selector hub: cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']")
        //or by cypress window:
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible')
    }) 

    it.skip('Right click', ()=>{
        
        cy.visit("swisnl.github.io/jQuery-contextMenu/demo.html")

        //Aproach -01 trigger
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        // cy.get('.context-menu-icon-copy > span').should('be.visible')

        //Aproach -02 rightclick
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get('.context-menu-icon-copy > span').should('be.visible')
    })

    //not run by me his code run Part 13: Cypress E2E Web Automation | Interacting with Elements | Handling Mouse
    it.skip('Double click', ()=>{  
        
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult')

        //Aproach -01 trigger
        // cy.get("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
        // cy.get('#iframeResult').find("#field2").should("have.value","Hello world!")

        //Aproach -02 doubleclick
        // cy.get("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        // cy.get('#iframeResult').find("#field2").should("have.value","Hello world!")
    })

    it.skip('Drag and Drop using plugin', ()=>{
        //your connection is not private (website error)
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

        cy.wait(3000)
        cy.get('#box6').drag('#box106',{force:true})
    })

    it('Scrolling Page', ()=>{
        
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        //Canada
        cy.get(':nth-child(1) > tbody > :nth-child(35) > :nth-child(1) > img').scrollIntoView({duration: 3000})
        cy.get(':nth-child(1) > tbody > :nth-child(35) > :nth-child(1) > img').should('be.visible')

        //bahamas
        cy.get(':nth-child(1) > tbody > :nth-child(14) > :nth-child(1) > img').scrollIntoView({duration: 3000})

        cy.get('#footer').scrollIntoView({duration: 3000})
    })
})