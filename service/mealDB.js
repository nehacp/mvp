// create service for using meal db to make $http requests to server

angular.module('plan-meals')
	.service('mealDB', function($http) {
		
		let fetch = (param, callback) => {
			let url = 'http://127.0.0.1:2345/recipes';
			url += `?${param}`;
			$http.get(url).then((response) => {
				callback(response.data);
			}).catch(err => console.log('error in GET request', err));
		}

		let add = (param, callback) => {
			let url = 'http://127.0.0.1:2345/recipes';
			$http.post(url, {search: param}).then((data) => {
				console.log('POST request success', data);
			}).catch(err => console.log('error in POST request', err));
		}

		return {
			search: fetch,
			add: add
		};

	})




// Search meal by name
// http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// Lookup full meal details by id
// http://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// Lookup a random meal
// http://www.themealdb.com/api/json/v1/1/random.php

// Latest Meals
// http://www.themealdb.com/api/json/v1/1/latest.php

// List all Categories, Area, Ingredients
// http://www.themealdb.com/api/json/v1/1/list.php?c=list
// http://www.themealdb.com/api/json/v1/1/list.php?a=list
// http://www.themealdb.com/api/json/v1/1/list.php?i=list

// Filter by ingredient
// http://www.themealdb.com/api/json/v1/1/filter.php?i=chicken%20breast

// Filter by Category
// http://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood