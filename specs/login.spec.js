const login = require('../pages/login.page');
const fakeMail = 'a@a.com'
const realMail = 'younis.2210@gmail.com'
const realPass = 'Welcome!@34'

describe('Load the login page', function() {

    it('Should Login', function() {
        login.navigateToApp();
        expect(login.getSignInHeader()).toEqual('Login to your account');
    })
});

describe('Login to the app with empty password', function() {

    it('Should fail to Login', function() {
        login.enterUserName(fakeMail);
        login.pressLoginBtn()
        expect(login.getErrorMessage()).toEqual('wrong email or password');
    })
});

describe('Login to the app with real user', function() {

    it('Should fail to Login', function() {
        login.enterUserName(realMail);
        login.enterPassword(realPass);
        login.pressLoginBtn()
        expect(login.getErrorMessage()).toEqual('wrong email or password');
    })
});