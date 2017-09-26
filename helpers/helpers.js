const request = require('request');


getRecipesFromMealDB = function(param, callback) {
	let url = `http://www.themealdb.com/api/json/v1/1/search.php?s=${param}`
	request(url, (err, response, body) => {
		callback(JSON.parse(body).meals);
	})
}


module.exports.getRecipesFromMealDB = getRecipesFromMealDB;

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