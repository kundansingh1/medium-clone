/* jshint esversion: 6 */

/**
 * @author: Kundan Singh
 * @Date: 11 Aug 2016
 */

import authInterceptor from './auth.interceptor';


/*
 * @param {any} $httpProvider
 * @param {any} $stateProvider
 * @param {any} $locationProvider
 * @param {any} $urlRouterProvider
 */
function AppConfig($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $httpProvider.interceptors.push(authInterceptor);

  // $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html',
    resolve: {
      auth: function(User) {
        return User.verifyAuth();
      }
    }
  });

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
