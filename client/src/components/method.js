
angular.module('plan-meals')
	.component('method', {
		bindings: {
			line: '<'
		},

		controller: function () {
			
		},

		template: `<div class="method">{{$ctrl.line}}.</div>`
	});