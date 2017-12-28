const until = protractor.ExpectedConditions;

const Signup = function() {
    const searchField = element(by.model('$select.search'));
    const countrySelect = element(by.id('country-select'));
    const amountOfSearch = element(by.className('ui-select-choices-row')).all(by.className('ui-select-choices-row-inner'));

    this.enterTextToSearch = function (lookup) {
        countrySelect.click();
        searchField.sendKeys(lookup);
    }
    /**
     * count the counries in the search field
     * @return int - number of countries filtered
     */
    this.countSearchResults = function () {
        var amount;
        amount = amountOfSearch.count().then(function (num) {
            return num;
        })
        return amount;
    }
};
module.exports = new Signup();