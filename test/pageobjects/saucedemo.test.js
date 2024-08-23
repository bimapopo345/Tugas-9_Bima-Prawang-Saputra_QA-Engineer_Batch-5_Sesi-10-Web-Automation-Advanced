// test/specs/saucedemo.test.js
const LoginPage = require("../pageobjects/login.page");
const InventoryPage = require("../pageobjects/inventory.page");

describe("Sauce Demo Test", () => {
  it("should login successfully", async () => {
    await browser.url("https://www.saucedemo.com");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $(".btn_action").click();
    await $(".inventory_list").waitForDisplayed({ timeout: 10000 });
    console.log("Logged in successfully, inventory list is displayed");
    await expect($(".inventory_list")).toBeExisting();
  });

  it("should validate user is on dashboard", async () => {
    const url = await browser.getUrl();
    console.log("Current URL after login:", url);
    await expect(url).toContain("inventory.html"); // Using toContain to make it more flexible
    await $(".inventory_list").waitForDisplayed({ timeout: 10000 });
    console.log("Inventory list is displayed on dashboard");
  });

  it("should add an item to the cart", async () => {
    await browser.url("https://www.saucedemo.com/inventory.html");
    const item = await $(".inventory_item_name").getText();
    console.log("First item name:", item); // Verify item name is retrieved
    await $(".btn_primary").click(); // Assume this is the button to add the item
    console.log("Clicked add to cart for:", item);

    await $(".shopping_cart_link").click(); // Navigate to the cart
    await browser.pause(5000); // Ensure the page has loaded
  });

  it("should validate item was added to cart", async () => {
    await $(".shopping_cart_link").click();
    await $(".cart_quantity").waitForDisplayed({ timeout: 10000 });
    const quantityText = await $(".cart_quantity").getText();
    console.log("Quantity in cart:", quantityText);
    await expect($(".cart_quantity")).toHaveText("1");
  });
});
