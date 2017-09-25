// import angular from 'angular';
// //import recipe list fro

angular.module('plan-meals')
	.component('search', {
		bindings: {
		},

		controller: function () {
			//functions for app here
		},

		template: `<input type="text" ng-model="$ctrl.value" />
							<button type='submit' ng-click"$ctrl.onClick()">Search</button>`
	});