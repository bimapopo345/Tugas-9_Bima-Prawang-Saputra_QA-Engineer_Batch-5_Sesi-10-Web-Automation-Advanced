// test/pageobjects/login.page.js
class LoginPage {
  get username() {
    return $("#user-name");
  }
  get password() {
    return $("#password");
  }
  get loginButton() {
    return $(".btn_action");
  }

  open() {
    browser.url("https://www.saucedemo.com");
  }

  login(username, password) {
    this.username.setValue(username);
    this.password.setValue(password);
    this.loginButton.click();
  }
}

module.exports = new LoginPage();
