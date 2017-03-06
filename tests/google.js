module.exports = {
    'demo test google': function (client) {
        client
            .url('http://google.com')
            .setValue('input[type=text]', ['Agile fuel', client.Keys.ENTER]).pause(2000);

        var isContain = false;

        client.elements('xpath', '//*[@class=\'g\'][position() < 6]', function (res) {

            res.value.map(function (v, k) {
                client.elementIdText(v.ELEMENT, function (res) {
                    if (res.value.includes('www.agilefuel.com/')) {
                        isContain = true;
                        myAssert(isContain);
                    }

                });

            });

            function myAssert(flag) {
                client.assert.equal(flag, true);
            };


        });

        client.end();

    }

};