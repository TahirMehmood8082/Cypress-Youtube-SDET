
describe('Alerts', () => {

    it.skip("01- Basic Alert", () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert', (alertText)=>{
            expect(alertText).to.contains('I am a JS Alert')
        })

    })

    it.skip("02- Confirm Alert OK", () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', (acceptConfirm)=>{
            expect(acceptConfirm).to.contains('I am a JS Confirm')
        })

    })

    it("03- Confirm Alert Cancel", () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        it('Handling JS Confirm - Click Cancel', () => {
            cy.contains(':nth-child(2) > button').click()
            cy.get('window:confirm').should('have.text', 'cancel')
            cy.on('window:confirm', () => false)
            cy.get('#result').should('have.text', 'You clicked: Cancel')
        })
        // cy.on('window:confirm', (cancelPopup)=>{
        //     return false
        //     cy.get(':nth-child(2) > button').click()
        //     cy.get('#result').should('have.text', 'You clicked: Cancel')
            
        // })

    })
})