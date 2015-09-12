'use strict';

import angular from 'angular';
import ngRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';

angular
    .module('webpackExample')
    .config(
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('foo', {
                    url: '/foo',
                    templateProvider: ['$q', function($q) {
                        var deferred = $q.defer();

                        require.ensure([], function(require) {
                            var template = require('./foo/foo.html');
                            deferred.resolve(template);
                        }, 'foo');

                        return deferred.promise;
                    }],
                    controller: 'FooController',
                    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                        var deferred = $q.defer();

                        require.ensure([], function(require) {
                            var mod = require('./foo');
                            $ocLazyLoad.load({
                                name: mod.name,
                            });

                            deferred.resolve(mod.controller);
                        }, 'foo');

                        return deferred.promise;
                    }]
                })
                .state('bar', {
                    url: '/bar',
                    templateProvider: ['$q', function($q) {
                        var deferred = $q.defer();

                        require.ensure([], function(require) {
                            var template = require('./bar/bar.html');
                            deferred.resolve(template);
                        }, 'bar');

                        return deferred.promise;
                    }],
                    controller: 'BarController',
                    resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                        var deferred = $q.defer();

                        require.ensure([], function(require) {
                            var mod = require('./bar');
                            $ocLazyLoad.load({
                                name: mod.name,
                            });

                            deferred.resolve(mod.controller);
                        }, 'bar');

                        return deferred.promise;
                    }]
                });

            $urlRouterProvider.otherwise('/foo');
        });
