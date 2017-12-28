const signup = require('../pages/signup.page');
const login = require('../pages/login.page');

describe('Load the signup page', function() {

    it('Should open registration page', function() {
        login.navigateToApp();
        login.clickGetStarted();
        signup.enterTextToSearch();

    })
});