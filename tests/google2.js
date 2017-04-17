'use strict';

module.exports = {
    'Login to Admin Panel': function (browser) {

        var login = browser.page.google2();

        login.navigate().search().waitForElementVisible('.srg', 10000);

        login.getElementsList().then(function (a) {

            browser.assert.equal(a, true, "Looks good");
        });

        // browser.perform(function(client, done){
        //     console.log("i am here");
        //     login.getElementsList().then(function (a) {
        //         client.assert.equal(a, true);
        //         done();
        //     });
        // });


        browser.end();
    }
};
