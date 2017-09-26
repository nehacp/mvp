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

		template: `<input class="search-field" placeholder="  find meal.." type="text" ng-model="$ctrl.value"/>
					<button class="input-search" type="submit" ng-click="$ctrl.onClick($ctrl.value)">Search</button><br>
					<button class="random-search" type="submit" ng-click="$ctrl.onClick('random')">Show Random</button>
					<button class="latest-search" type="submit" ng-click="$ctrl.onClick('latest')">Show Latest</button>`
	});