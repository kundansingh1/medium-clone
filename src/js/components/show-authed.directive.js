/* jshint esversion:6 */

function ShowAuthed(User) {
	'ngInject';

	return {
		restrict: 'A', // restrict to just attributes
		link: function(scope, element, attrs) {
			scope.User = User;

			scope.$watch('User.current', function(val) {
				// If user detected
				if(val) {
					if(attrs.showAuthed === 'true') {
						element.css({display: 'inherit'});
					} else {
						element.css({display: 'none'});
					}
				} else { // no user detected 
					if(attrs.showAuthed === 'true') {
						element.css({display: 'none'});
					} else {
						element.css({display: 'inherit'});
					}
				}
			});
		}
	};
}

export default ShowAuthed;