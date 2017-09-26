//import angular from 'angular';
//import recipes from '../../data/dummydata.js';
// import recipeList from './components/recipeList.js';
// import search from './components/search.js';

angular.module('plan-meals')
	.component('app', {
		controller: function (mealDB) {

			this.initialData = (recipes) => {
				this.recipes = recipes; 
			}

			this.onSearch = (searchFor) => {
				mealDB.search(searchFor.toLowerCase(), this.initialData);
			}

			this.added = () => {
				alert('Added');
			}

			this.addToFavorites = (recipe) => {
				mealDB.add(recipe, this.added);
			}

			mealDB.search('', this.initialData);
		},

		template: `
			<div id="main">
				<search search="$ctrl.onSearch"></search>
				<div class="all-recipes">
					<recipe-list add="$ctrl.addToFavorites" recipes="$ctrl.recipes">	
					</recipe-list>
				</div>
			</div>
		`
	});

