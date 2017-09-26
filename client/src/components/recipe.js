// import angular from 'angular';
// //import recipe list fro

angular.module('plan-meals')
	.component('recipe', {
		bindings: {
			recipe: '<',
			add: '<'
		},

		controller: function () {

			this.favorites = (recipe) => {
				this.add(recipe);
			}
			
		},

		template: `
		<div class="recipe">
		<div class="recipe-name">{{$ctrl.recipe.name}}</div>
			<a ng-href="{{$ctrl.recipe.url}}">Source Link</a>
			<a href="#" class="favorites" ng-click="$ctrl.favorites($ctrl.recipe)">Add to favorites</a><br>
			<img class="thumbnail" ng-src="{{$ctrl.recipe.image}}" alt="$ctrl.recipe.name">
			<div class="ingredient-box">
			<div class="recipe-headings">Ingredients</div>
				<ingredient ng-repeat="(key, value) in $ctrl.recipe.ingredients" key="key" value="value"> 
				</ingredient>
			</div>
			<div class="method-box">
			<div class="recipe-headings">Method</div>
				<method line="line" ng-repeat="line in $ctrl.recipe.method"></method>
			</div>
		</div>`
	});