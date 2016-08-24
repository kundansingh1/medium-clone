/*jshint esversion: 6 */

class HomeCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    console.log('hello world!');

  }
}

export default HomeCtrl;