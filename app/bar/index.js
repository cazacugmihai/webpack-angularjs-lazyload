import barController from './bar.controller.js';
import './bar.styl';

module.exports = angular.module('bar', [])
.controller('BarController', barController);
