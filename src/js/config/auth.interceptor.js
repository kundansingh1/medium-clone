/* jshint esversion:6 */

/**
 * @author: Kundan Singh
 * @Date: 12 Aug 2016
 * 
 * @param {any} JWT
 * @param {any} AppConstants
 * @param {any} $window
 * @param {any} $q
 * @returns
 */
function authInterceptor(JWT, AppConstants, $window, $q) {
	'ngInject';

	return {
		// automatically attach authorization header

		request: function(config) {
			if(config.url.indexOf(AppConstants.api) === 0 && JWT.get()) {
				config.headers.Authorization = 'Token ' + JWT.get();
			}
			return config;
		},

		// Handle Error
		responseError: function(rejection) {
			if(rejection.status === 401) {
				// clear any JWT being stored
				JWT.destroy();

				//do a hard page refresh
				$window.location.reload();
			}
			return $q.reject(rejection);
		}
	};
}

export default authInterceptor;