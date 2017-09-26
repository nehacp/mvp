// create service for using meal db to make $http requests to server

angular.module('plan-meals')
	.service('mealDB', function($http) {
		
		let fetch = (param, callback) => {
			let url = 'http://127.0.0.1:2345/recipes';
			url += `?${param}`;
			$http.get(url).then((response) => {
				console.log('received data', response.data);
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

