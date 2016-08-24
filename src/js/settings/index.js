/* jshint esversion:6 */

import angular from 'angular';

let settingsModule = angular.module('app.settings', []);

import SettingsConfig from './settings.config';
settingsModule.config(SettingsConfig);

// controllers
import SettingsCtrl from './settings.controller';
settingsModule.controller('SettingsCtrl', SettingsCtrl);

export default settingsModule;

