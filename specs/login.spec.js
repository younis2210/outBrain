const login = require('../pages/LoginPage');

describe('Load the login page', function() {

    it('Should Login', function() {
        login.navigateToApp();
        expect(login.getSignInHeader()).toEqual('Login to your account');
    })
});

describe('Login to the app with empty password', function() {

    it('Should Login', function() {
        login.enterUserName('a@a.com');
        expect(login.getEmail()).toEqual('Login to your account');
    })
});