// test/specs/saucedemo.test.js
// test/specs/saucedemo.test.js
const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Sauce Demo Test with Detailed Debugging", () => {
  it("should login successfully with detailed debugging", async () => {
    await LoginPage.open(); // Open login page
    await LoginPage.login("standard_user", "secret_sauce"); // Perform login

    // Check current URL to verify successful login
    const currentUrl = await browser.getUrl();
    console.log("Current URL after login attempt:", currentUrl);
    expect(currentUrl).toContain("inventory.html");

    // Ensure the inventory list is displayed after login
    console.log("Checking if inventory list is displayed...");
    await InventoryPage.inventoryList.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Inventory list did not display after login.",
    });
    console.log("Inventory list is displayed after login.");

    // Ensure the inventory list is displayed after login
    console.log("Checking if inventory list is displayed...");
    await InventoryPage.inventoryList.waitForDisplayed({
      timeout: 10000,
      timeoutMsg: "Inventory list did not display after login.",
    });
    console.log("Inventory list is displayed after login.");
  });

  it("should add an item to the cart", async () => {
    await InventoryPage.addItemToCart(); // Panggil metode addItemToCart() dari InventoryPage
    console.log("Clicked add to cart");

    await InventoryPage.openCart(); // Panggil metode openCart() dari InventoryPage
    await browser.pause(5000); // Jeda untuk memastikan halaman termuat
  });

  it("should validate item was added to cart", async () => {
    await InventoryPage.openCart(); // Panggil metode openCart() dari InventoryPage
    await $(".cart_quantity").waitForDisplayed({ timeout: 10000 });
    const quantityText = await $(".cart_quantity").getText();
    console.log("Quantity in cart:", quantityText);
    await expect($(".cart_quantity")).toHaveText("1");
  });
});
