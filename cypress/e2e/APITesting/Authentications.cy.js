describe("Authentication", ()=>{
    it("Basic Authentication", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                user: 'postman',
                pass: 'password'
            }
        })
            .then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.authenticated).to.eq(true)
            
        })
    })
   // difference username,password and digest method
    it("Digest Authentication", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                username: 'postman',
                password: 'password',
                method: "Digest"
            }
        })
            .then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.authenticated).to.eq(true)
            
        })
    })

    const token = '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'
    it("Bearer Token Auth", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Authorization: 'Bearer '+token
            }
        })
            .then((response)=>{
                expect(response.status).to.eq(200)
        })
    })

    it("API Key Auth", ()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.weatherapi.com/v1/current.json?key=ba325ee9cdd1470993154157231607&aqi=no',
            qs: {
                q:'London',
                appid: 'ba325ee9cdd1470993154157231607'
            }
        })
            .then((response)=>{
                expect(response.status).to.eq(200)
        })
    })
})