describe("Grid View", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the Home page - 10 Pokemons", () => {
    cy.getByTestId("grid-view", "Grid View component").should("exist");

    cy.getByTestId("grid-item", "Pokemon Card component").should(
      "have.length",
      10
    );
  });

  it("Visits the Home page - Load More + 10", () => {
    cy.getByTestId("grid-view", "Grid View component").should("exist");

    cy.getByTestId("grid-item", "Pokemon Card component").should(
      "have.length",
      10
    );

    cy.getByTestId("load-more-btn", "Load More Button").click();

    cy.getByTestId("grid-item", "Pokemon Card component").should(
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
