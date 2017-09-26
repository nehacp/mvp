// create service for using meal db to make $http requests to server

angular.module('plan-meals')
	.service('server', function($http) {
		
		let fetch = (param, callback) => {
			let url = 'http://127.0.0.1:2345/recipes';
			url += `?${param}`;
			$http.get(url).then((response) => {
				// console.log('received data', response.data);
				if (!response.data) {
					callback(null);
				} else {
					callback(response.data);
				}

			}).catch(err => console.log('error in GET request', err));
		}

		let add = (info, callback) => {
			let url = 'http://127.0.0.1:2345/recipes';
			$http.post(url, info).then((response) => {
				// console.log('POST request success', response);
				callback(response.data);
			}).catch(err => console.log('error in POST request', err));
		}

		return {
			search: fetch,
			add: add
		};

	})

