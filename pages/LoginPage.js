const until = protractor.ExpectedConditions;

const LoginPage = function() {
   /** Elements **/
   const loginHeader = element(by.className('signin-header'));
   const userNameField = element(by.id('signin-member-username'));
   const passwordField = element(by.id('signin-member-password'));
   const loginButton = element(by.id('loginButton'));

    /**
     * navigate to the login page
     */
    this.navigateToApp = function() {
        browser.get('http://my.outbrain.com');
        browser.wait(until.presenceOf(loginHeader), 1000)
    };

    this.getSignInHeader = function() {
        return loginHeader.getText();
    };
    /**
     * enter the user name to the field
     * @param  {email} string
     */
    this.enterUserName = function(email) {
        browser.wait(until.presenceOf(userNameField), 1000);
        userNameField.sendKeys(email)
    };

    this.enterPassword = function(pass) {
        passwordField.sendKeys(pass)
    };

    this.pressLoginBtn = function() {
        loginButton.click()
    };

    this.presenceOfLoginElements = function() {
        return myElement.isPresent()
    };

};

module.exports = new LoginPage();
