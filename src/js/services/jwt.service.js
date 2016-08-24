/* jshint esversion: 6 */

/**
 * @Author: Kundan Singh
 * @Date: 11 Aug 2016
 * 
 * @export
 * @class JWT
 */
export default class JWT {
	/**
	 * Creates an instance of JWT.
	 * 
	 * @param {any} AppConstants
	 * @param {any} $window
	 */
	constructor(AppConstants, $window) {
		'ngInject';
		this._AppConstants = AppConstants;
		this._$window = $window;
	}

	/**
	 * 
	 * 
	 * @param {any} token
	 */
	save(token) {
		this._$window.localStorage[this._AppConstants.jwtKey] = token;
	}

	/**
	 * 
	 * 
	 * @returns jwtKey
	 */
	get() {
		return this._$window.localStorage[this._AppConstants.jwtKey];
	}
	destroy() {
		this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
	}
}