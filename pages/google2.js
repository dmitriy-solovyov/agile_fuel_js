'use strict';

module.exports = {
    url: function () {
        return 'http://google.com';
    },
    elements: {
        searchField: {
            selector: 'input[type=text]'
        },
        listOfElements: {
            selector: "//*[@class='g'][position() < 6]"
        }

    },
    commands: [{
        search: function (text) {
            return this.setValue('@searchField', ['Agile fuel', this.api.Keys.ENTER]);
        }
        ,
        getElementsList: function () {

            // this.api.elements('xpath', '//*[@class=\'g\'][position() < 6]', function (res) {
            // console.log(res);
            //     let promise = new Promise((resolve, reject) => {
            //         let size = res.value.length;
            //         res.value.forEach(function (item) {
            //             console.log(item);
            //             client.elementIdText(item.ELEMENT, function (res) {
            //                 arr.push(res.value);
            //                 if (arr.length == size) {
            //                     resolve(arr);
            //                 }
            //
            //             });
            //         });
            //
            //     });
            //
            //     promise
            //         .then(
            //             result => {return value.includes('www.agilefuel.com/')} // сработает
            //         );
            //         // .then(
            //         //     result => {
            //         //         client.assert.equal(result.some((value) => {
            //         //             return value.includes('www.agilefuel.com/')
            //         //         }), true)
            //         //     } // сработает
            //         // );
            //
            // });
            
            
            
            var self = this;

            return new Promise(function (resolve, reject) {

                self.api.elements('xpath', '//*[@class=\'g\'][position() < 6]', function (res) {

                    let arr = [];
                    let size = res.value.length;

                    res.value.forEach(function (item) {

                        self.api.elementIdText(item.ELEMENT, function (res) {
                            arr.push(res.value);
                            if (arr.length == size) {
                                let answ = arr.some((i) => {
                                    return i.includes('www.agilefuel.com/');
                                });
                                resolve(answ);
                            }
                        });
                    });
                });
            });
        }














            // this.api.elements('xpath', '//*[@class=\'g\'][position() < 6]', function (res) {
            //
            //     let promise = new Promise((resolve, reject) => {
            //         let size = res.value.length;
            //         res.value.forEach(function (item) {
            //             client.elementIdText(item.ELEMENT, function (res) {
            //                 arr.push(res.value);
            //                 if (arr.length == size) {
            //                     resolve(arr);
            //                 }
            //
            //             });
            //         });
            //
            //     });
            //
            //     promise
            //         .then(
            //             result => {return value.includes('www.agilefuel.com/')} // сработает
            //         );
            //         // .then(
            //         //     result => {
            //         //         client.assert.equal(result.some((value) => {
            //         //             return value.includes('www.agilefuel.com/')
            //         //         }), true)
            //         //     } // сработает
            //         // );
            //
            // });
            
           //  let self = this;
           //  let arr = yield getRes();
           // // return arr;
           //  console.log("THIS: " + client);
           //  console.log("THIS: " + this);
           //
           //  function getRes(client) {
           //      client.api.elements('xpath', '@listOfElements', function (res) {
           //
           //          let promise = new Promise((resolve, reject) => {
           //              let size = res.value.length;
           //              res.value.forEach(function (item) {
           //                  client.elementIdText(item.ELEMENT, function (res) {
           //                      arr.push(res.value);
           //                      if (arr.length == size) {
           //                          resolve(arr);
           //                      }
           //
           //                  });
           //              });
           //
           //          });
           //
           //          promise
           //              .then(
           //                  result => {return value.includes('www.agilefuel.com/')} // сработает
           //              );
           //
           //      });
           //
           //  }


            // return new Promise((resolve, reject) => {
            //     console.log('getElementsList');
            //     let result;
            //     this.api.elements('xpath', '@listOfElements', function (res) {
            //         console.log("get elements by xpath");
            //         let promise = new Promise((resolve, reject) => {
            //             console.log('I am in Promise');
            //             let size = res.value.length;
            //             res.value.forEach(function (item) {
            //                 client.elementIdText(item.ELEMENT, function (res) {
            //                     arr.push(res.value);
            //                     if (arr.length == size) {
            //                         console.log("RESOLVE ARRAY");
            //                         resolve(arr);
            //                     }
            //
            //                 });
            //             });
            //
            //         });
            //
            //         let myRes;
            //
            //         promise
            //             .then(
            //                 result => {
            //                     result.some((value) => {
            //                         console.log("PROMISE");
            //                         // return value.includes('www.agilefuel.com/')
            //                         myRes = value.includes('www.agilefuel.com/');
            //                         // resolve(value.includes('www.agilefuel.com/'));
            //                     })
            //                 } // сработает
            //             ).then(resolve(myRes));
            //     })
            // });
        //}
    }]
};