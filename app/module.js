'use strict';

import angular from 'angular';
import ngRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';

angular
    .module(
        'webpackExample', [
            ngRouter,
            ocLazyLoad
        ]
    );
