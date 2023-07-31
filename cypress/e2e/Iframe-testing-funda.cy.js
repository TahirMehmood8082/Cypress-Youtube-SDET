describe('Iframe describe suits', ()=>{

    it('Validate iframe area is editable ',()=>{

        cy.visit('https://the-internet.herokuapp.com/tinymce')

        cy.get("#mce_0_ifr").then(($iframe) => {

            let iframeBody = $iframe.contents().find('body')
            cy.wrap(iframeBody)
            .clear()
            .type("Congrates Writing text in Iframe is Done")
            .type("{selectall}")
            cy.get('[aria-label="Bold"] > .tox-icon > svg').click()
        })

    })
})