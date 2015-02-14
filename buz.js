   // buz.js  Export an Anonymous Object
    var Buz = function () {};

    Buz.prototype.log = function () {
      console.log('Export an Anonymous Object Log method ');
    };

    Buz.prototype.print = function() {
      console.log('Export an Anonymous Object print method ');
    };

    module.exports = new Buz();