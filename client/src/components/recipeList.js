// import angular from 'angular';
// import recipe from './recipe.js';

angular.module('plan-meals')
	.component('recipeList', {
		bindings: {
			recipes: '<',
			add: '<'
		},

		controller: function () {
			//functions for app here
		},

		template: `
			<div class="recipe-box">
				<recipe add="$ctrl.add" recipe="recipe" ng-repeat="recipe in $ctrl.recipes"> </recipe>
			</div>`
	});