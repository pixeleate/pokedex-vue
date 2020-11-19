describe("List View", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the Home page - 10 Pokemons", () => {
    cy.getByTestId("list-view-btn", "List View Button").click();

    cy.getByTestId("list-view", "List View component").should("exist");

    cy.getByTestId("list-item", "Pokemon Row component").should(
      "have.length",
      10
    );
  });

  it("Visits the Home page - Load More + 10", () => {
    cy.getByTestId("list-view-btn", "List View Button").click();

    cy.getByTestId("list-view", "Grid View component").should("exist");

    cy.getByTestId("list-item", "Pokemon Row component").should(
      "have.length",
      10
    );

    cy.getByTestId("load-more-btn", "Load More Button").click();

    cy.getByTestId("list-item", "Pokemon Row component").should(
      "have.length",
      20
    );
  });

  it("Visits the Home page - Add to Favorites", () => {
    cy.getByTestId("grid-item", "Pokemon Card component")
      .contains("Bulbasaur")
      .then(() => {
        cy.getByTestId("favorite-btn", "Favorite Button")
          .first()
          .click();
      });
  });
});
