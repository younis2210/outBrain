const login = require('../pages/login.page');
const fakeMail = 'a@a.com'
const realMail = 'younis.2210@gmail.com'
const realPass = 'Welcome!@34';
const fakePass = 'aaaa';

describe('Load the login page', function() {

    it('Should Login', function() {
        login.navigateToApp();
        login.checkCheckbox(); // just tapping the checkbox whiout validating
        expect(login.getSignInHeader()).toEqual('Login to your account');
    })
});

describe('Login to the app with empty password', function() {
    /* Killing the captcha before each test */
    // beforeAll(function () {
    //     login.closeRobotMsg();
    // });
    it('Should fail to Login', function() {
        login.enterUserName(fakeMail);
        login.pressLoginBtn()
        expect(login.getErrorMessage()).toEqual('wrong email or password');
    })
    afterEach(function() {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });
});

describe('Check fields border after wrong password', function() {

    it('Should fail to Login', function() {
        login.enterUserName(realMail);
        login.enterPassword(fakePass);
        login.pressLoginBtn()
        expect(login.checkBorderColorPurple()).toEqual('rgba(199, 198, 196, 1)');
        expect(login.getErrorMessage()).toEqual('wrong email or password');
    })
});

describe('Login to the app with real user fake pass', function() {

    it('Should fail to Login', function() {
        login.enterUserName(realMail);
        login.enterPassword(fakePass);
        login.pressLoginBtn()
        expect(login.getErrorMessage()).toEqual('wrong email or password');
    })
});

describe('Login to the app with real user real pass', function() {
    it('Should fail to Login', function() {
        login.enterUserName(realMail);
        login.enterPassword(realPass);
        login.pressLoginBtn()
        expect(login.validateUserInHomePage(), 'user menu not displayed').toBe(true)
    })
});