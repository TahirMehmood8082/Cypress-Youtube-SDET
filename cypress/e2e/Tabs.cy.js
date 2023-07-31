describe('Handle tabs', () => {

    it.skip("Approach - 01", () =>{

        cy.visit("https://the-internet.herokuapp.com/windows") //parent tab

        cy.get(".example >a").invoke('removeAttr','target').click() // click link

        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")

        cy.wait(5000)
        //operations
        cy.go('back') //back to parent tab
    })

    it("Approach - 02", () =>{

        cy.visit("https://the-internet.herokuapp.com/windows") //parent tab

        cy.get(".example >a").then((e)=>{

            let url = e.prop('href') // href represent target url
            cy.visit(url)   
            // limitation: domain of link (https://the-internet.herokuapp.com/)
            // must be same in both (cy.visit) and (cy.url) hit 
            // sometimes after clicking link user redirect to other domain
        })

        cy.url().should('include',"https://the-internet.herokuapp.com/windows/new")

        cy.wait(5000)
        //operations
        cy.go('back') //back to parent tab
    })
})