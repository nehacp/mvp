// import angular from 'angular';
// //import recipe list fro

angular.module('plan-meals')
	.component('login', {
		bindings: {
			login: '<'
		},

		controller: function () {
			this.loginUser = (username, password) => {
				this.login(username, password);
				this.username = '';
				this.password = '';
			}
		},

		template: `
		<div class="login-box">
		<h3>Login</h3><br>
			<input class="username" placeholder="username.." type="text" ng-model="$ctrl.username"/><br>
			<input class="password" placeholder="password.." type="password" ng-model="$ctrl.password"/><br>
			<button class="login-user" type="submit" ng-click="$ctrl.login($ctrl.username, $ctrl.password)">Login</button><br>			
		</div>`
	});

	//<input class="input-field" class="password" placeholder="password.." type="text" ng-model="$ctrl.password"/>