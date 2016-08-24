/* jshint esversion: 6 */

class AuthCtrl {
	constructor(User, $state, AppConstants) {
		'ngInject';

		this._User = User;
		this._$state = $state;
 
		this.appName = AppConstants.baseURL;
		this.title = $state.current.title;
		this.authType = $state.current.name.replace('app.', '');
	}

	submitForm() {
		this.isSubmiting = true;

		this._User.attemptAuth(this.authType, this.formData).then(
			(res) => {
				this.isSubmiting = false;
				console.log(res);
				this._$state.go('app.home');
			},
			(err) => {
				this.isSubmiting = false;
				this.errors = err.data.errors;
				console.log(err);
			}
		);

		console.log(this.formData);
	}
}

export default AuthCtrl;