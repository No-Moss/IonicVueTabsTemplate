const tabSelector = '[data-test="global-nav-bar"]';
const headerSelector = '[data-test="header-bar"]';
const sizes = ["macbook-16", "iphone-8", "samsung-s10", "ipad-2"];
const homeBtnSelector = '[data-test="home-button"]';
const exploreBtnSelector = '[data-test="explore-button"]';
const profileBtnSelector = '[data-test="profile-button"]';

describe("When the application is loaded", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  sizes.forEach((size) => {
    it("shows all the navigation buttons on mobile, tablet, desktop, ios and android screens and devices", () => {
      cy.viewport(size);
      cy.get(tabSelector).should("contain", "Home");
      cy.get(tabSelector).should("contain", "Explore");
      cy.get(tabSelector).should("contain", "Profile");
    });
  });
  it("shows home page by default", () => {
    cy.get(headerSelector).should("contain", "Home");
  });
  describe("When a global navigation button is selected", () => {
    it("navigates to the correct page", () => {
      cy.get(tabSelector).find(homeBtnSelector).click();
      cy.get(headerSelector).should("contain", "Home");

      cy.get(tabSelector).find(exploreBtnSelector).click();
      cy.get(headerSelector).should("contain", "Explore");

      cy.get(tabSelector).find(profileBtnSelector).click();
      cy.get(headerSelector).should("contain", "Profile");
    });
  });
});
