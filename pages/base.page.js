const until = protractor.ExpectedConditions;

const BasePage = function() {
    /**/
    this.clearTextField = function(element) {
        element.clear()
    };

};
module.exports = new BasePage();