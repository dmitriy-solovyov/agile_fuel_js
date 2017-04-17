'use strict';

module.exports = {
    'demo test google': function (client) {
        client
            .url('http://google.com')
            .setValue('input[type=text]', ['Agile fuel', client.Keys.ENTER]).pause(2000);

        let arr = [];

        client.elements('xpath', '//*[@class=\'g\'][position() < 6]', function (res) {

            let promise = new Promise((resolve, reject) => {
                let size = res.value.length;
                res.value.forEach(function (item) {
                    client.elementIdText(item.ELEMENT, function (res) {
                        arr.push(res.value);
                        if (arr.length == size) {
                            resolve(arr);
                        }

                    });
                });

            });

            promise
                .then(
                    result => {
                        client.assert.equal(result.some((value) => {
                            return value.includes('www.agilefuel.com/')
                        }), true)
                    } // сработает
                );

        });

        client.end();

    }

};