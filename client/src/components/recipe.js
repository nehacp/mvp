// import angular from 'angular';
// //import recipe list fro

angular.module('plan-meals')
	.component('recipe', {
		bindings: {
			recipe: '<',
		},

		controller: function () {

			this.favorites = () => {
				//send to database and add
			}
			
		},

		template: `
		<div class="recipe">
			<a ng-href="{{$ctrl.recipe.url}}">{{$ctrl.recipe.name}}</a><br>
			<a href="#" class="favorites" ng-click="$ctrl.favorites()">Add to favorites</a><br>
			<img ng-src="{{$ctrl.recipe.image}}" alt="$ctrl.recipe.name">
			<div class="ingredient-box">Ingredients
				<ingredient ng-repeat="(key, value) in $ctrl.recipe.ingredients" key="key" value="value"> 
				</ingredient>
			</div>
			<div class="method-box">Method
				<method line="line" ng-repeat="line in $ctrl.recipe.method"></method>
			</div>
		</div>`
	});