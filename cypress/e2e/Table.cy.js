describe('Handle Tables', () => {

    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get('#input-username').type("demo")
        cy.get('#input-password').type("demo")
        cy.get("button[type='submit']").click()

        cy.get(".btn-close").click()
        // Customer ---> Customer
        cy.get("#menu-customer>a").click() // customer main menu
        cy.get("#menu-customer>ul>li:first-child").click() // customer sub/child item
    })

    it.skip("Check Number of Rows & Columns", () =>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10')
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
       
    })

    it.skip("Check cell data from specific Rows & Columns", () =>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("xvrt@test.com")
       
    })

    it.skip("Read all Rows & Columns data in first page", () =>{

       cy.get("table[class='table table-bordered table-hover']>tbody>tr")
       // row = current single, rows = all
            .each( ($row, index, $rows)=>{

                cy.wrap($row).within( ()=>{

                    cy.get("td").each( ($col, index, $cols)=>{

                        cy.log($col.text())
                    })
                })
            })
    })

    it("Pagination", () =>{

        //find total pages
        let totalPages
        // cy.get(".col-sm-6.text-end").then( (e)=>{
        //     let mytext = e.text() //Showing 1 to 10 of 14068 (1407 Pages)
        //     cy.log("mytext===> "+mytext)
        //     totalPages = mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1)
        //     cy.log("Total no of pages in table ========> " + totalPages)
        // })
        // first to skip because of ! > buttons in pagination bar
        totalPages = 7
        for(let p=3; p<=totalPages; p++){
            
            if(totalPages > 1){

                cy.log("Active page is =========***** "+p)

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click() // +p+ is syntax for traverse childs
                cy.wait(3000)

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                .each( ($row, index, $rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())  //Email
                        })
                    })
                })

            }
        }
       
    })
})