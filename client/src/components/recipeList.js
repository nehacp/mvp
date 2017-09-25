// import angular from 'angular';
// import recipe from './recipe.js';

angular.module('plan-meals')
	.component('recipeList', {
		bindings: {
			recipes: '<',
		},

		controller: function () {
			//functions for app here
		},

		template: `<recipe recipe="recipe" ng-repeat="recipe in $ctrl.recipes"></recipe>`
	});