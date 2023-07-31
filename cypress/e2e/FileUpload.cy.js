import 'cypress-file-upload'
describe("File Uploads", () =>{

    it.skip('Single File Upload', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('sample.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    }) 

    it.skip('File Upload - Rename', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'sample.pdf', fileName: 'newname.pdf'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')

    })

    it.skip('File Upload - Drag and drop', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#drag-drop-upload").attachFile('sample-2page.pdf', {subjectType: 'drag-n-drop'})
        cy.wait(5000)

        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
           .contains("sample-2page.pdf")


    })

    it.skip('Multiple File Upload', ()=>{

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        cy.get("#filesToUpload").attachFile('sample-2page.pdf',  'sample.pdf')
        cy.wait(5000)

        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')

    })

    it('File Upload -- Shadow Dom', ()=>{

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm") //extension htm not html

        cy.get(".smart-browse-input", { includeShadowDom:true}).attachFile('sample-2page.pdf')
        cy.wait(5000)

        cy.get(".smart-item-name", { includeShadowDom:true}).contains('sample-2page.pdf')

    })

  
})