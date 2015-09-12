import fooController from './foo.controller.js';
import './foo.styl';

module.exports = angular.module('foo', [])
.controller('FooController', fooController);
