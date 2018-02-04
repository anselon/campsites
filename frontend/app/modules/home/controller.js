define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var CampsiteListView = require('./views/campsiteList');

    return Marionette.Controller.extend({

        initialize: function (options) {
            this.app = options.app;
            this.logger = options.logger;
        },
        index : function () {
            this.app.container.show(new CampsiteListView({
                message: 'HI THERE',
                collection : FEATURES
            }));
        }
    });

});