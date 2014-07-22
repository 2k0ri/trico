require.config({
    paths: {
        gumby: 'libs/gumby.min',
        jquery: 'libs/jquery-1.9.1.min',
        plugins: 'plugins',
        parallax: 'libs/ui/gumby.parallax',
        app: 'app'
    }
});

require(['jquery' ,'plugins', 'gumby', 'parallax', 'app'], function (app) {
    'use strict';
    // use app here
});
