const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/favoriteRecipes');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const Recipe = mongoose.model('recipes', new Schema ({
		recipe_id: {
			type: Number,
			unique: true
		},

		name: String,
		image: String,
		ingredients: Object,
		url: String,
		method: Array
	})
);

const addRecipe = (recipe, callback) => {
	let newRecipe = new Recipe(recipe);
	newRecipe.save(callback);
}

const fetchRecipes = (callback) => {
	return Recipe.find().exec(callback);
}

module.exports.addRecipe = addRecipe;
module.exports.fetchRecipes = fetchRecipes;
