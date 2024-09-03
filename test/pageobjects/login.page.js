// test/pageobjects/login.page.js
class LoginPage {
  get username() {
    return $("#user-name");
  }

  get password() {
    return $("#password");
  }

  get loginButton() {
    return $("#login-button");
  }

  get errorMessage() {
    return $(".error-message-container h3");
  }

  open() {
    console.log("Opening SauceDemo login page...");
    browser.url("https://www.saucedemo.com");
    browser.pause(1000); // Short pause to ensure the page is loaded
  }

  async login(username, password) {
    console.log("Starting login process...");

    // Wait until elements are displayed before interacting
    await this.username.waitForDisplayed();
    console.log("Setting username...");
    await this.username.setValue(username);
    console.log(`Username set to: ${username}`);

    await this.password.waitForDisplayed();
    console.log("Setting password...");
    await this.password.setValue(password);
    console.log(`Password set to: ${password}`);

    await this.loginButton.waitForClickable();
    console.log("Clicking login button...");
    await this.loginButton.click();

    // Wait for the error message or navigation
    await browser.pause(2000); // Short pause to observe results
    if (await this.errorMessage.isDisplayed()) {
      const errorText = await this.errorMessage.getText();
      console.error("Login failed with error: " + errorText);
    } else {
      console.log("Login seems successful, no error message displayed.");
    }
  }
}

module.exports = new LoginPage();
