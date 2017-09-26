
angular.module('plan-meals')
	.component('ingredient', {
		bindings: {
			key: '<',
			value: '<'
		},

		controller: function () {
		},

		template: `<div class="ingredient-line">{{$ctrl.value}} {{$ctrl.key}}</div>`
	});