const signup = require('../pages/signup.page');
const login = require('../pages/login.page');

describe('Load the signup page', function() {
    it('Should open registration page and fill the search with isr', function() {
        login.navigateToApp();
        login.clickGetStarted();
        signup.enterTextToSearch('isr');
        expect(signup.countSearchResults(), 'only one country start with isr').toEqual(1);
    })
});