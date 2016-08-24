/* jshint esversion:6 */

function SettingsConfig($stateProvider) {
	'ngInject';
	$stateProvider
	.state('app.settings', {
		url: '/settings',
		controller: 'SettingsCtrl',
		controllerAs: '$ctrl',
		templateUrl: 'settings/settings.html',
		title: 'Settings',
		resolve: {
			auth: function(User) {
				User.ensureAuthIs(true);
			}
		}
	});
}

export default SettingsConfig;