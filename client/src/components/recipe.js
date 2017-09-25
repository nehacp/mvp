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
		<div class="recipe-name">{{$ctrl.recipe.strMeal}}</div>`
	});