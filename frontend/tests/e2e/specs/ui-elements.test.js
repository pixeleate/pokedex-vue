describe("Basic UI components", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visits the Home page - Grid view by default", () => {
    cy.getByTestId("nav-tabs", "Nav Tabs component").should("exist");

    cy.getByTestId("search-bar", "Search Bar component").should("exist");

    cy.getByTestId("view-controls", "View Controls component").should("exist");

    cy.getByTestId("grid-view", "Grid View component").should("exist");

    cy.getByTestId("grid-item", "Pokemon Card component").should("exist");

    cy.getByTestId("list-view", "List View component").should("not.exist");

    cy.getByTestId("list-item", "Pokemon Row component").should("not.exist");

    cy.getByTestId("load-more-btn", "Load More Button").should("exist");
  });

  it("Visits the Home page - List view", () => {
    cy.getByTestId("list-view-btn", "List View Button").click();

    cy.getByTestId("nav-tabs", "Nav Tabs component").should("exist");

    cy.getByTestId("search-bar", "Search Bar component").should("exist");

    cy.getByTestId("view-controls", "View Controls component").should("exist");

    cy.getByTestId("list-view", "List View component").should("exist");

    cy.getByTestId("list-item", "Pokemon Row component").should("exist");

    cy.getByTestId("grid-view", "Grid View component").should("not.exist");

    cy.getByTestId("grid-item", "Pokemon Card component").should("not.exist");

    cy.getByTestId("load-more-btn", "Load More Button").should("exist");
  });
});
