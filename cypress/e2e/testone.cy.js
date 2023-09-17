// /// <reference types="cypress"/>
// //()=>{} هدول لعملوا ا رو فنكشن
// describe('this is to test login page',()=>{

// // it =test
//   it('test with correct password and user name',()=>{

//     cy.visit("https://www.google.com")
//   })

//   it('this is two test incorrect password',()=>{
//     cy.visit("https://www.google.com")
//     cy.get('#APjFqb').type("monya{enter}")
//     // cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()

//   })
// })n

/// <reference types="cypress"/>
Cypress.Commands.add("test", (count) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[placeholder="Username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  for (let i = 0; i < count; i++) {
    cy.get(".btn").eq(i).click();
  }
  cy.get('.shopping_cart_link').click()
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type("monya")
  cy.get('[data-test="lastName"]').type("jaber")
  cy.get('[data-test="postalCode"]').type("1234")
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="finish"]').click()
});
describe("this is to test the log in page", () => {
  it.skip("add items to the cart", () => {
    cy.test(6);
    // cy.get('.shopping_cart_badge').invoke('text').should('eql',"6")
    cy.get(".shopping_cart_badge").invoke("text").should("eql", "6");
  });

  it("test all items", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[placeholder="Username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get("#inventory_container")
      .find(".inventory_item_name")
      .each((product) => {
        cy.log(product.text());
      });
    const expectedItemNames = [];

    cy.get("#inventory_container")
      .find(".inventory_item_name")
      .each(($product, index) => {
        if (index < 1) {
          const itemName = $product.text();
          cy.log(itemName);
          expectedItemNames.push(itemName);
        }
      })
      .then(() => {
        const firstThreeExpectedNames = expectedItemNames.slice(0, 3);
        cy.wrap(firstThreeExpectedNames).should(
          "deep.equal",
          firstThreeExpectedNames.sort()
        );
      });
  });
});
