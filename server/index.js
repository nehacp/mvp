const express = require('express');
const recipes = require('./../client/src/data/dummydata.js');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const urlMethods = require('url');
const helpers = require('./../helpers/helpers.js');
const db = require('./../database');
const session = require('./../helpers/createSession.js');


app.use(express.static(__dirname+ './../'));
app.use(bodyParser());
// app.use(session.createSession);

app.get('/recipes', (req, res) => {

	let data = urlMethods.parse(req.url);
	let searchFor = data.query.replace(/%20/g, ' ');

  if (searchFor === 'favorites') {
		db.fetchRecipes((err, recipes) => {
			if (err) {console.log('error', err)};
			console.log('favorite recipes', recipes);
			res.status(200).send(recipes)
		});
	} else {
		helpers.getRecipesFromMealDB(searchFor, (recipes) => {
			res.send(recipes);
		});
	}
});

app.post('/recipes', (req, res) => {

	if (req.body['favorite']) {
		db.addRecipe(req.body.favorite, (err, data) => {
			if (err) {console.log('error', err)};
			res.status(201).send();
		});
	} else if (req.body['name']){
		db.addUser(req.body, (err, data) => {
			if (err) {
				console.log('error adding user', err);
				res.send('User exists, please use another name');
			} else {
				res.send('Account created');
			}
		});
	} else if (req.body['loginId']) {
		db.findUser(req.body, (err, user) => {
			if (helpers.checkLoginDetails(req.body, user[0])) {
				res.send('success');
			} else {
				res.send('error');
			}
		})
	}

	
})

app.listen(2345, () => console.log('connected: listening on port: 2345'));