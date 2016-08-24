/* jshint esversion: 6 */

import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import ListErrors from './list-errors.components';
componentsModule.component('listErrors', ListErrors);

// Directives

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

export default componentsModule;
