const express = require('express');
const recipes = require('./../client/src/data/dummydata.js');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const urlMethods = require('url');
const helpers = require('./../helpers/helpers.js')

app.use(express.static(__dirname+ './../'));

app.get('/recipes', (req, res) => {
	let data = urlMethods.parse(req.url)
	let searchFor = data.query.replace(/%20/g, ' ');
	
	if (searchFor === '') {
		res.send(recipes);
	} else {
		helpers.getRecipesFromMealDB(searchFor, (recipes) => {
			res.send(recipes);
		});
	}
})

app.listen(2345, () => console.log('connected: listening on port: 2345'));