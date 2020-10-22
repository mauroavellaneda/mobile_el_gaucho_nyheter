describe("Visitor can see articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });

  it("visitor can see page header", () => {
    cy.get("#header").should("contain", "Welcome to El Gaucho nyheter");
  });

  xit("shows first article ", () => {
    cy.get("#article-title-1").within(() => {
      cy.contains(
        "Ny studie: Möjligt att utplåna fattigdomen och samtidigt rädda klimatet"
      );
      cy.get("[data-cy='image']").should("be.visible")
    });
  });
  
  xit("shows second article", () => {
    cy.get("#article-title-2").within(() => {
      cy.contains("Benjamin Ingrosso får matshow på TV4");
    });
  });
});