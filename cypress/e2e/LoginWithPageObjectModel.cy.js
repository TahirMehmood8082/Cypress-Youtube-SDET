import Login from "../PageObjects/LoginPage2"

describe("Page Object Model Suite", () =>{

    // using PageObjectModel
    it.skip('LoginTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")

        const ln = new Login()
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin() 
    }) 

    // using PageObjectModel with fixtures
    it('LoginTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('orangehrm').then((data)=>{
            const ln = new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
        })
         
    }) 
})