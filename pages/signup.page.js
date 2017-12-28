const until = protractor.ExpectedConditions;

const Signup = function() {
    const searchField = element(by.model('$select.search'));


    this.enterTextToSearch = function () {
        searchField.sendKeys('aaaaa')
    }
};
module.exports = new Signup();