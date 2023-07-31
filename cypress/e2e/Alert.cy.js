/*
Alert types
01: js alert-----------: text and ok btn
02: js confirm alert---: text, ok, cancel btn
03: js prompt alert----: text, textbox, ok btn
04: Authenticated alert: 

*/

describe('Alerts', () => {

    it.skip("01- JS Alert", () =>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        //alert window automatically closed by cypress using ok btn

        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it.skip("02- JS confirm Alert - OK", () =>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        //alert window automatically closed by cypress using ok btn

        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it.skip("02- JS confirm Alert - Cancel", () =>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        cy.on('window:confirm',()=>false) //cypress closes alert by  using Cancel btn

        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it("03- JS prompt Alert", () =>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

       // before opening the prompt we control it, and passing text 'welcome'
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')
        })
        
        cy.get("button[onclick='jsPrompt()']").last().click()
        //button[onclick='jsPrompt()']

        //cypress automatically close prompt by 'ok' btn

        cy.get('#result').should('have.text','You entered: welcome')

        // he never write cancel part
        //cy.on('window:confirm', () => false) //cypress closes alert by  using Cancel btn

        //cy.get('#result').should('have.text','You entered: null')
    })

    it.skip("04- Authenticated Alert", () =>{

        //Approach-01
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth: {username: "admin", password:"admin"}})

        //Approach-02
        // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        // cy.get("div[class='example'] p").should('have.contain',"Congratulations")

       
    })
})