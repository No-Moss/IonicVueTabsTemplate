import { mount } from "@vue/test-utils";
import TabsPage from "./TabsPage.vue";
const tabSelector = '[data-test="tab-bar"]';
const sizes = ["macbook-16", "iphone-8", "samsung-s10", "ipad-2"];

describe("When the home page is loaded", () => {
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
});
