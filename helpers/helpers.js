const request = require('request');


getRecipesFromMealDB = function(param, callback) {
	let mealsByName = `http://www.themealdb.com/api/json/v1/1/search.php?s=${param}`
	// let mealsByCategory = `http://www.themealdb.com/api/json/v1/1/list.php?c=${param}`
	// let mealsByIngredient = `http://www.themealdb.com/api/json/v1/1/search.php?i=${param}`
	// let mealsByArea = `http://www.themealdb.com/api/json/v1/1/search.php?a=${param}`
	let meals = [];
	request(mealsByName, (err, response, meals1) => {
		// request(mealsByCategory, (err, response, meals2) => {
		// 	request(mealsByIngredient, (err, response, meals3) => {
		// 		request(mealsByIngredient, (err, response, meals4) => {
					meals = meals1 ? meals.concat(JSON.parse(meals1).meals) : meals;
					// meals = meals2 ? meals.concat(JSON.parse(meals2).meals) : meals;
					// meals = meals3 ? meals.concat(JSON.parse(meals3).meals) : meals;
					// meals = meals4 ? meals.concat(JSON.parse(meals4).meals) : meals;
					//add check for no meals found
					parseRecipes(meals, callback);
				})
	// 		})
	// 	})
	// })
}

const parseRecipes = (recipes, callback) => {
	let parsed = recipes.map(recipe => {
		
		let details = {
			name: recipe.strMeal,
			image: recipe.strMealThumb,
			url: recipe.strSource,
			method: recipe.strInstructions.split('.')
		}

		let ingredients = [];
		let measurements = [];
		for (var key in recipe) {
			if (/Ingredient/.test(key)) {
				ingredients.push(recipe[key])
			}
			if (/Measure/.test(key)) {
				measurements.push(recipe[key])
			}
		}

		details.ingredients = ingredients.reduce((result, ingredient, i) => {
			result[ingredient] = measurements[i];
			return result;
		}, {});

		return details;
	});	

	callback(parsed);
}


module.exports.getRecipesFromMealDB = getRecipesFromMealDB;
module.exports.parseRecipes = parseRecipes;
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