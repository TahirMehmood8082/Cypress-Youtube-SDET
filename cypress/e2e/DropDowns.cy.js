describe('handle dropdowns', () => {

    it("Dropdown with select", () =>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country")
        .select('Italy')
        .should('have.value','Italy')
    })

    it.skip("Dropdown without select element in html", () =>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('china').type('{enter}')

        cy.get('#select2-billing_country-container')
        .should('have.text', 'China')
    
    })

    it.skip("Auto Suggested Dropdown", () =>{

        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestion-title').contains('Delhi University').click()
    
    })

    it.skip("Dynamic Dropdown", () =>{

        cy.visit("https://www.google.com/")

        cy.get("#APjFqb").type('cypress automation')

       // cy.wait(5000)

        /*
        cy.get('#APjFqb')  //  input[name='q']
        cy.get('.Alh6id')   //  div.wM6W7d>span
        cy.get('.UUbT9')
        cy.get(':nth-child(10) > .eIPGRd > .pcTkSc')  text-container //
        */
        cy.get('#vTtioc > .wM6W7d > span')
       //cy.get('.erkvQe').should('have.length',12)

        cy.get('#vTtioc > .wM6W7d > span').each(($el, index, $list)=>{

            if($el.text()=='cypress automation tutorial'){
                cy.wrap($el).click()
            }

        })

        //cy.get("#APjFqb").should('have.value','cypress automation tutorial')
    
    })
})