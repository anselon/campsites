define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var CampsiteView = require('campsite');

    return Marionette.ListView.extend({
        template : require('text!./../templates/campsite.hbs'),
        childView : CampsiteView
    });

});