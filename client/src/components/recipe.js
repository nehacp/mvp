// import angular from 'angular';
// //import recipe list fro

angular.module('plan-meals')
	.component('recipe', {
		bindings: {
			recipe: '<',
		},

		controller: function () {
			
		},

		template: `
		<div class="recipe">{{$ctrl.recipe.name}}
			<img ng-src="{{$ctrl.recipe.image}}" alt="$ctrl.recipe.name">
			<div class="all-ingredients">
				<ingredient ng-repeat="(key, value) in $ctrl.recipe.ingredients" key="key" value="value"> 
				</ingredient>
			</div>
			<div class="method-box">
				<method line="line" ng-repeat="line in $ctrl.recipe.method"></method>
			</div>
		</div>`
	});