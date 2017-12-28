const base = require('../pages/base.page');

const until = protractor.ExpectedConditions;

const LoginPage = function() {
   /** Elements **/
   const wrongPass = element(by.className('wrong-pass'));
   const loginHeader = element(by.className('signin-header'));
   const userNameField = element(by.id('signin-member-username'));
   const passwordField = element(by.id('signin-member-password'));
   const loginButton = element(by.id('loginButton'));
   const rememberCheckbox = element(by.css("label[for='signin-member-remember']"));
   const userMenu = element(by.id('welcome-user'));
   const robotMessage = element(by.id('recaptcha-anchor'));
   const workingArea = element(by.id('working-area'));
   const newAccountBtn = $$('.register-forgot > label:nth-child(2) a');
   const userMenuDrop = element(by.css('[ng-click="welcome.showUserMenu($event)"]'))
   const logOutBtn = element(by.css('[ng-click="welcome.logout()"]'))


    /**
     * navigate to the login page
     */
    this.navigateToApp = function() {
        browser.get('/');
        browser.wait(until.presenceOf(loginHeader), 1000);
    };

    this.getSignInHeader = function() {
        return loginHeader.getText();
    };

    this.clickGetStarted = function () {
        newAccountBtn.click();
    };

    this.getErrorMessage = function() {
        browser.wait(until.presenceOf(wrongPass), 1000)
        return wrongPass.getText();
    };
    /**
     * enter the user name to the field
     * @param  {email} string
     */
    this.enterUserName = function(email) {
        browser.wait(until.presenceOf(userNameField), 1000);
        base.clearTextField(userNameField)
        userNameField.sendKeys(email)
    };

    this.enterPassword = function(pass) {
        passwordField.sendKeys(pass)
    };

    this.pressLoginBtn = function() {
        loginButton.click()
    };

    this.checkBorderColorRed = function() {
        var rgbArray;
        rgbArray = userNameField.getCssValue('border-bottom-color').then(function(borderColor) {
            return borderColor;
        });
        return rgbArray;
    };

    this.validateUserInHomePage = function () {
        return userMenu.isDisplayed();
    }

    /* this method for testing CAPTCHA */
    // this.closeRobotMsg = function () {
    //     console.log(robotMessage.position)
    //     browser.wait(until.presenceOf(robotMessage), 1000);
    //     if (robotMessage.isDisplayed()) {
    //         robotMessage.click();
    //     }
    // }

    this.checkCheckbox = function() {
        rememberCheckbox.click();
    };

    this.validateWorkingAreaLoaded = function() {
        return workingArea.isDisplayed();
    };

    this.signOut = function() {
        userMenuDrop.click();
        logOutBtn.click();
        browser.wait(until.presenceOf(loginHeader), 1000);
    };
};

module.exports = new LoginPage();
