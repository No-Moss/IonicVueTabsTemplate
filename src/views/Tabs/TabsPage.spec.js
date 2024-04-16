const { chromium, test, expect } = require("playwright/test");

const tabSelector = '[data-test="global-nav-bar"]';
const headerSelector = '[data-test="header-bar"]';
const sizes = ["macbook-16", "iphone-8", "samsung-s10", "ipad-2"];
const homeBtnSelector = '[data-test="home-button"]';
const exploreBtnSelector = '[data-test="explore-button"]';
const profileBtnSelector = '[data-test="profile-button"]';

function getViewportSize(device) {
  switch (device) {
    case "macbook-16":
      return { width: 3072, height: 1920 };
    case "iphone-8":
      return { width: 375, height: 667 };
    case "samsung-s10":
      return { width: 360, height: 760 };
    case "ipad-2":
      return { width: 768, height: 1024 };
    default:
      return { width: 1920, height: 1080 };
  }
}
test.describe("When the application is loaded", () => {
  let browser;
  let page;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:8100/tabs/Home");
  });

  test.afterEach(async () => {
    await page.close();
  });

  sizes.forEach((size) => {
    test(
      "shows all the navigation buttons on mobile, tablet, desktop, ios and android screens and devices. Testing size: " +
        size,
      async () => {
        await page.setViewportSize({ width: 1920, height: 1080 }); // Set desktop viewport size
        await page.setViewportSize(getViewportSize(size)); // Set custom viewport size
        await page.waitForSelector(tabSelector);
        expect(await page.$eval(tabSelector, (el) => el.textContent)).toContain(
          "Home"
        );
        expect(await page.$eval(tabSelector, (el) => el.textContent)).toContain(
          "Explore"
        );
        expect(await page.$eval(tabSelector, (el) => el.textContent)).toContain(
          "Profile"
        );
      }
    );
  });

  test("shows home page by default", async () => {
    await page.waitForSelector(headerSelector);
    expect(await page.$eval(headerSelector, (el) => el.textContent)).toContain(
      "Home"
    );
  });

  test.describe("When a global navigation button is selected", () => {
    test("navigates to the correct page", async () => {
      await page.waitForSelector(tabSelector);
      await page.click(homeBtnSelector);
      await page.waitForSelector(headerSelector);
      expect(
        await page.$eval(headerSelector, (el) => el.textContent)
      ).toContain("Home");

      await page.click(exploreBtnSelector);
      await page.waitForSelector(headerSelector);
      expect(
        await page.$eval(headerSelector, (el) => el.textContent)
      ).toContain("Explore");

      await page.click(profileBtnSelector);
      await page.waitForSelector(headerSelector);
      expect(
        await page.$eval(headerSelector, (el) => el.textContent)
      ).toContain("Profile");
    });
  });
});
