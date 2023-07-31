class Login{

    txt_username = "input[placeholder='Username']"
    txt_password = "input[placeholder='Password']"
    txt_submit_btn = "button[type='submit']"
    txt_header_title = ".oxd-topbar-header-breadcrumb > .oxd-text"

    setUserName(username){
        cy.get(this.txt_username).type(username)
    }

    setPassword(password){
        cy.get(this.txt_password).type(password)
    }

    clickSubmit(){
        cy.get(this.txt_submit_btn).click()
    }

    verifyLogin(){
        cy.get(this.txt_header_title).should('have.text', 'Dashboard')
    }
}

export default Login