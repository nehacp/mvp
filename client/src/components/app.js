//import angular from 'angular';
//import recipes from '../../data/dummydata.js';
// import recipeList from './components/recipeList.js';
// import search from './components/search.js';

angular.module('plan-meals')
	.component('app', {
		controller: function (mealDB) {

			this.updateRecipes = (recipes) => {
				this.recipes = recipes; 
			}

			this.onSearch = (searchFor) => {
				mealDB.search(searchFor.toLowerCase(), this.updateRecipes);
			}

			this.added = () => {
				alert('Added');
			}

			this.addToFavorites = (recipe) => {
				mealDB.add(recipe, this.added);
			}

			this.getFavorites = () => {
				mealDB.search('favorites', this.updateRecipes);
			}

			mealDB.search('', this.updateRecipes);
		},

		template: `
			<div id="main">
				<div class="main-bar">
					<h2 class="app-name">    It's time to eat!</h2>
					<p class="show-favorites" ng-click="$ctrl.getFavorites()">Show favorites</p>
				</div>
				<h3>Search for a meal!</h3>
				<search search="$ctrl.onSearch"></search>
				<div class="all-recipes">
					<recipe-list add="$ctrl.addToFavorites" recipes="$ctrl.recipes">	
					</recipe-list>
				</div>
			</div>
		`
	});

