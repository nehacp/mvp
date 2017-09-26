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

			mealDB.search('', this.initialData);
		},

		template: `
			<div id="main">
				<search search="$ctrl.onSearch"></search>
				<recipe-list recipes="$ctrl.recipes">	</recipe-list>
			</div>
		`
	});

