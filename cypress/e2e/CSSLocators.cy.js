describe('CSSLocators', () => {

    it("csslocators", () =>{
        cy.visit("http://automationpractice.com/index.php")

        cy.get("#search_query_top").type("T-Shirts")  //id, tag is optional

        //cy.get("input.search_query[name='search_query']").type("T-Shirts") //tag-Class-Attribute

        cy.get("[name='submit_search']").click()

        cy.get(".lighter").contains("T-Shirts")  //Assertion
    })
})