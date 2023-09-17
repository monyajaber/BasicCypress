/// <reference types="cypress"/>

Cypress.Commands.add("test", (indices) => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[placeholder="Username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  
    indices.forEach((index) => {
      cy.get(".btn").eq(index).click();
    });
  });
  
  describe(" add to cart random item", () => {
    it("add items to the cart", () => {
      const itemIndices = [0, 2, 4];
      cy.test(itemIndices);
      cy.get(".shopping_cart_badge").invoke("text").should("eql", "3"); 
    });
  });
  