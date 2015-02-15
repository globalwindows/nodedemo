   // buz.js  Export an Anonymous Object
    var ExportAnonymousObject = function () {};

    ExportAnonymousObject.prototype.log = function () {
      console.log('Export an Anonymous Object Log method ');
    };

    ExportAnonymousObject.prototype.print = function() {
      console.log('Export an Anonymous Object print method ');
    };

    ExportAnonymousObject.prototype.readwrite = function() {
    	
      console.log('Export an Anonymous Object print method ');
    };

    module.exports = new ExportAnonymousObject();