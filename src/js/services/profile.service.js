/* jshint esversion:6 */

export default class Profile {
	constructor(AppConstants, $http) {
		'ngInject';

		this._AppConstants = AppConstants;
		this._$http = $http;
 
	} // constructor

	get(username) {
		return this._$http({
			url: this._AppConstants.api + '/profiles/' + username,
			method: 'GET'
		}).then((res) => res.data.profile);
	} // get()

	follow(username) {
		return this._$http({
			url: this._AppConstants.api + '/profiles/' + username,
			method: 'POST'
		}).then((res) => res.data);
	} // follow

	unfollow(username) {
		return this._$http({
			url: this._AppConstants.api + '/profiles/' + username,
			method: 'DELETE'
		}).then((res) => res.data);
	} // unfollow
}