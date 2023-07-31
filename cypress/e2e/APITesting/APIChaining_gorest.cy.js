/*
POST   https://gorest.co.in/public/v2/users
PUT    https://gorest.co.in/public/v2/users/${userId}
DELETE https://gorest.co.in/public/v2/users/${userId}

*/

describe("Gorest API Chaining", () => {
  const auth_token =
    "Bearer 9bbf9bd031824e5e2861e1666ce8159f435b7cb61f7f24dded3dfa98b27adc03";

  it("create, update, delete user in Gorest API", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      body: {
        name: "John Kenedy",
        gender: "male",
        email: Math.random().toString(5).substring(2) + "@gmail.com",
        status: "active",
      },
      headers: {
        Authorization: auth_token,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      const userId = response.body.id;
      //update user name
      cy.request({
        method: "PUT",
        url: `https://gorest.co.in/public/v2/users/${userId}`,
        body: {
          name: "Scott",
        },
        headers: {
          Authorization: auth_token,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.name).to.equal("Scott");
        //delete resource
        cy.request({
          method: "DELETE",
          url: `https://gorest.co.in/public/v2/users/${userId}`,
          headers: {
            Authorization: auth_token,
          },
        }).then((response) => {
          expect(response.status).to.equal(204);
        });
      });
    });
  });
});
