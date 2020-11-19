describe("Detail page - Grid View / List View", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the Detail page - UI elements", () => {
    cy.getByTestId("image-link", "Image Link")
      .first()
      .click({ force: true });

    cy.getByTestId("favorite-btn", "Favorite Button").should("exist");

    cy.getByTestId("image", "Image").should("exist");

    cy.getByTestId("name", "Name").should("exist");

    cy.getByTestId("sound-btn", "Play Sound Button").should("exist");

    cy.getByTestId("types", "Types").should("exist");

    cy.getByTestId("evolutions", "Evolutions").should("exist");
  });
});
