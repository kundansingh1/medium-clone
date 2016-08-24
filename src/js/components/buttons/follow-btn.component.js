/* jshint esversion: 6 */

class FollowBtnCtrl {
	constructor(Profile, User, $state) {
		'ngInject';

		this._Profile = Profile;
		this._User = User;
		this._$state = $state;
	}

	submit() {
		this.isSubmitting = true;

		if(!this._User.current) {
			this._$state.go('app.register');
			return;
		}

		// if already following user

		if(this.user.following) {
			this._Profile.unfollow(this.user.username).then(
				() => {
					this.isSubmitting = false;
					this.user.following = false;
				}
			);
		}
	}


} // class FollowBtnCtrl

let FollowBtn = {
	bindings: {
		user  : '='
	},
	controller: FollowBtnCtrl,
	template: 'components/buttons/follow-btn.html'
};

export default FollowBtn;


