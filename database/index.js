const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/recipe-app');
const Recipes = mongoose.model('recipes', new Schema ({
	id: {
		type: Number,
		unique: true
	},

	name: String,
	image: String,
	ingredients: Array,
	url: String,
	method: Array

});


const addRecipe = (details) => {
	
	// let recipe = new Recipe(details);
	// recipe.save()// promisify
}

const findRecipe = (param) => {
	//Recipes.find()
}