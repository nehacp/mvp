//import angular from 'angular';
//import recipes from '../../data/dummydata.js';
// import recipeList from './components/recipeList.js';
// import search from './components/search.js';

angular.module('plan-meals')
	.component('app', {
		controller: function (mealDB) {
			this.createUser = false;
			this.login = false;

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
				let favorite = {favorite: recipe};
				mealDB.add(favorite, this.added);
			}

			this.getFavorites = () => {
				this.login = false;
				this.createUser = false;
				mealDB.search('favorites', this.updateRecipes);
			}

			this.signUpUser = (username, password) => {
				let user = {name: username, password: password};
				mealDB.add(user, this.created);
			}

			this.created = (data) => {
				if (data.includes('User exists')) {
					alert('data');
				} else {
					this.createUser = false;
					this.login = true;		
				}
				//if user exists
					//create another account
				//else render login page
			}

			this.loginUser = () => {
				//log in user
			}

			mealDB.search('', this.updateRecipes);
		},

		template: `
			<div id="main">
				<div class="main-bar">
					<h2 class="app-name">It's time to eat!</h2>
					<a href=#" class="main-bar-options" ng-click="$ctrl.getFavorites()">Show favorites</a>
					<a href="#" class="main-bar-options" ng-click="$ctrl.createUser = !$ctrl.createUser">Sign up</a>
					<a href="#" class="main-bar-options" ng-click="$ctrl.login = !$ctrl.login">Login</a>
				</div>
				<signup ng-if="$ctrl.createUser" create="$ctrl.signUpUser"></signup>
				<login ng-if="$ctrl.login" login="$ctrl.loginUser"></login>
				<h3 ng-if="!$ctrl.createUser && !$ctrl.login">Search for recipes!</h3>
				<search ng-if="!$ctrl.createUser && !$ctrl.login" search="$ctrl.onSearch"></search>
				<div class="all-recipes">
					<recipe-list ng-if="!$ctrl.createUser && !$ctrl.login" add="$ctrl.addToFavorites" recipes="$ctrl.recipes">	
					</recipe-list>
				</div>
			</div>
		`
	});

