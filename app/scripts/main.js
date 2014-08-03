require.config({
    paths: {
        gumby: 'libs/gumby.min',
        'gumby-init': 'libs/gumby.init',
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        plugins: 'plugins',
        parallax: 'libs/ui/gumby.parallax',
        inview: 'libs/ui/gumby.inview',
        app: 'app'
    }
});

require(['jquery', 'plugins', 'gumby', 'parallax', 'inview', 'gumby-init', 'app'], function (app) {
    'use strict';
    // use app here
});
