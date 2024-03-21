// import { mount } from "@vue/test-utils";
// import TabsPage from "./TabsPage.vue";
const tabSelector = '[data-test="global-nav-bar"]';
const headerSelector = '[data-test="header-bar"]';
const sizes = ["macbook-16", "iphone-8", "samsung-s10", "ipad-2"];

describe("When the application is loaded", () => {
  beforeEach(() => {
    cy.visit("/tabs");
  });
  sizes.forEach((size) => {
    it("shows all the navigation buttons on mobile, tablet, desktop, ios and android screens and devices", () => {
      cy.viewport(size);
      cy.get(tabSelector).contains("Home");
      cy.get(tabSelector).contains("Explore");
      cy.get(tabSelector).contains("Profile");
    });
  });
  it("shows home page by default", () => {
    cy.get(headerSelector).contains("Home");
  });
  describe("When a global navigation button is selected", () => {
    it("navigates to the correct page", () => {
      cy.get(tabSelector).contains("Home").click();
      cy.get(headerSelector).should("eq", "Home");

      cy.get(tabSelector).contains("Explore").click();
      cy.get(headerSelector).should("eq", "Explore");

      cy.get(tabSelector).contains("Profile").click();
      cy.get(headerSelector).should("eq", "Profile");
    });
  });
});
