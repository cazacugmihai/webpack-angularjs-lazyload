'use strict';

import angular from 'angular';

angular
    .module('webpackExample')
    .run(
        function($log) {
            $log.debug('runBlock end');
        }
    );
