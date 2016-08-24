/*jshint esversion: 6 */

function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  // Define the routes
  $stateProvider

  .state('app.login', {
    url: '/login',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Sign in',
    resolve: { // make sure the logged in user can't see the login/signin page
      auth: function(User) {
        return User.ensureAuthIs(false);
      }
    }
  })

  .state('app.register', {
    url: '/register',
    controller: 'AuthCtrl as $ctrl',
    templateUrl: 'auth/auth.html',
    title: 'Sign up',
    resolve: { // make sure the logged in user can't see the register/signup page
      auth: function(User) {
        return User.ensureAuthIs(false);
      }
    }
  });

}

export default AuthConfig;