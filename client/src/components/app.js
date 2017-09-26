//import angular from 'angular';
//import recipes from '../../data/dummydata.js';
// import recipeList from './components/recipeList.js';
// import search from './components/search.js';

angular.module('plan-meals')
	.component('app', {
		controller: function (server) {
			this.createUser = false;
			this.login = false;

			this.updateRecipes = (recipes) => {
				if (!recipes) {
					alert('No recipes found');
				} else {
					this.recipes = recipes; 
				} 
			}

			this.onSearch = (searchFor) => {
				server.search(searchFor.toLowerCase(), this.updateRecipes);
			}

			this.addToFavorites = (recipe) => {
				let favorite = {favorite: recipe};
				server.add(favorite, () => alert('Added'));
			}

			this.getFavorites = () => {
				this.login = false;
				this.createUser = false;
				server.search('favorites', this.updateRecipes);
			}

			this.signUpUser = (username, password) => {
				let user = {name: username, password: password};
				server.add(user, this.created);
			}

			this.created = (response) => {
				if (response.includes('User exists')) {
					alert(response);
				} else {
					this.createUser = false;
					alert(response);
					this.login = true;
				}
			}

			this.loginClick = () => {
				if (this.createUser) {
					this.createUser = false
				}
				this.login = true;
			}

			this.signUpClick = () => {
				if (this.login) {
					this.login = false
				}
				this.createUser = true;
			}

			this.loginUser = (loginId, password) => {
				server.add({loginId: loginId, password: password}, this.loggedIn);
			}

			this.loggedIn = (response) => {
				if (response === 'success') {
					alert('Logged in');
				} else {
					alert(response);
				}
			}

			this.homePage = () => {
				server.search('latest', this.updateRecipes);
				this.createUser = false;
				this.login = false;
			}

			this.homePage();
		},

		template: `
			<div id="main">
				<div class="main-bar">
					<a class="app-name" href="#" ng-click="$ctrl.homePage()">It's time to eat!</a>
					<a href=#" class="main-bar-options" ng-click="$ctrl.getFavorites()">Show favorites</a>
					<a href="#" class="main-bar-options" ng-click="$ctrl.signUpClick()">Sign up</a>
					<a href="#" class="main-bar-options" ng-click="$ctrl.loginClick()">Login</a>
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

