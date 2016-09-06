(function (){

	angular
		.module('myCart', [])
		.controller('cartCtrl', cartCtrl);

	function cartCtrl () {
		var cart = this;

		cart.collection = [
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 1',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 2',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 3',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 4',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 5',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 6',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 7',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 8',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 9',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			},
			{
				'img': 'http://placehold.it/250x250',
				'name': 'producto 10',
				'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros sit amet pulvinar aliquet.',
				'price': 299,
				'quantity': 0
			}
		]
	}

})()