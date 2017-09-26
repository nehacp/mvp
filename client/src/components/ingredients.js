
angular.module('plan-meals')
	.component('ingredient', {
		bindings: {
			key: '<',
			value: '<'
		},

		controller: function () {
		},

		template: `<div class="ingredient">{{$ctrl.value}} {{$ctrl.key}}</div>`
	});