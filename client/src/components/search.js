// import angular from 'angular';
// //import recipe list fro

angular.module('plan-meals')
	.component('search', {
		bindings: {
			search: '<'
		},

		controller: function () {
			this.onClick = (value) => {
				this.search(value);
				this.value = '';
			}
		},

		template: `<input placeholder="name of dish..." type="text" ng-model="$ctrl.value"/>
					<button type="submit" ng-click="$ctrl.onClick($ctrl.value)">Search</button>`
	});