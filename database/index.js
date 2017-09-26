const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/favoriteRecipes');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected to database');
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

const User = mongoose.model('user', new Schema ({
		name: {
			type: String,
			unique: true
		},

		password: String,
		favorites: Array,
	})
)

const addUser = (user, callback) => {
	new User(user).save(callback); 
}

const findUser = (user, callback) => {
	User.find({name: user.loginId}).exec((callback));
}


const addRecipe = (recipe, callback) => {
	let newRecipe = new Recipe(recipe);
	newRecipe.save(callback);
}

const fetchRecipes = (callback) => {
	return Recipe.find().exec(callback);
}

const updateUserFavs = (callback) => {
	return Recipe.find().exec(callback);
}

module.exports.addRecipe = addRecipe;
module.exports.fetchRecipes = fetchRecipes;
module.exports.addUser = addUser;
module.exports.findUser = findUser;
module.exports.updateUserFavs = updateUserFavs;
