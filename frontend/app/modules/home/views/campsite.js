define(function (require) {
    'use strict';

    var Marionette = require('marionette');

    return Marionette.ItemView.extend({
        template : require('text!./../templates/campsite.hbs'),
    });

});