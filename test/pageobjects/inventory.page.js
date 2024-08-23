// test/pageobjects/inventory.page.js
class InventoryPage {
  get inventoryList() {
    return $(".inventory_list");
  }
  get addToCartButton() {
    return $(".btn_primary");
  }
  get cartLink() {
    return $(".shopping_cart_link");
  }

  addItemToCart() {
    this.addToCartButton.click();
  }

  openCart() {
    this.cartLink.click();
  }
}

module.exports = new InventoryPage();
