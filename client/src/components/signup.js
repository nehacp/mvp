// import angular from 'angular';
// //import recipe list fro

angular.module('plan-meals')
	.component('signup', {
		bindings: {
			create: '<'
		},

		controller: function () {
			this.addUser = (username, password) => {
				this.create(username, password);
				this.username = '';
				this.password = '';
			}
		},

		template: `
		<div class="sign-up-box">
		<h3>Sign Up</h3><br>
			<input class="username" placeholder="username.." type="text" ng-model="$ctrl.username"/><br>
			<input class="password" placeholder="password.." type="password" ng-model="$ctrl.password"/><br>
			<button class="create-user" type="submit" ng-click="$ctrl.addUser($ctrl.username, $ctrl.password)">Create Account</button><br>			
		</div>`
	});

	//<input class="input-field" class="password" placeholder="password.." type="text" ng-model="$ctrl.password"/>