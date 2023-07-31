//clientid 8d62d019f159352d8003
//client secret 36677f87470ab8784958821c7ecc639949929f7c
//code=8e8f46fd56dc8397d152
//access_token=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&scope=&token_type=bearer

// Step 01
// Get the OAuth2 access token by hit url
// POST: https://github.com/login/oauth/access_token with
// Query params: client_id, client_secret, code

// get code by https://github.com/login/oauth/authorize?client_id=given in auth app

// Step 02
// GET: https://api.github.com/user/repos with access token

describe("OAuth2", ()=>{
    let accessToken = ""
    it("get OAuth2 access token", ()=>{
        cy.request({
            method: 'POST',
            url: 'https://github.com/login/oauth/access_token',
            qs: {
                client_id:'8d62d019f159352d8003',
                client_secret: '36677f87470ab8784958821c7ecc639949929f7c',
                code: '12f3b49c13f0d301caed'
            }
        })
            .then((response)=>{
                alert('response '+response)
               //"access_token=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&scope=&token_type=bearer"
               const params = response.body.split('&')
               accessToken = params[0].split("=")[1]
               cy.log("Generated Token: "+accessToken)
        })
    })
    

    it("OAuth2.0 Demo ", ()=>{
        
        cy.request({
            method: 'GET',
            url: 'https://api.github.com/user/repos',
            headers: {
                Autherization: 'bearer '+accessToken
            }
        })
            .then((response)=>{
                //593632190
               expect(response.status).to.eq(200)
               expect(response.body[0].id).to.equal(593632190)
        })
    })
})