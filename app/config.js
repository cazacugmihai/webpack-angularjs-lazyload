'use strict';

import angular from 'angular';

angular
    .module('webpackExample')
    .config(
        function($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    );
