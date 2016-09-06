( function () {
	'use strict'

	angular
		.module('myMovies', [])
		.controller('movieCtrl', movieCtrl);

	function movieCtrl () {
		var movie = this;

		movie.collection = [
			{
				'img': './img/padrino.jpg',
				'name': 'The Godfather',
				'cast': ['Marlon Brando', 'Al Pacino', 'James Caan'],
				'year': 1972,
				'category': 'Sci Fi',
			},
			{
				'img': './img/robot.jpg',
				'name': 'Mr. Robot',
				'cast': ['Rami Malek', 'Christian Slater', 'Portia Doubleday'],
				'year': 2015,
				'category': 'Sci Fi',
			},
			{
				'img': './img/matrix.jpg',
				'name': 'Matrix',
				'cast': ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
				'year': 1999,
				'category': 'Sci Fi',
			},
			{
				'img': './img/pulpfiction.jpg',
				'name': 'Pulp Fiction',
				'cast': ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
				'year': 1994,
				'category': 'Sci Fi',
			},
			{
				'img': './img/winter_soldier.jpg',
				'name': 'Captain America: The Winter Soldier',
				'cast': ['Chris Evans', 'Scarlett Johansson', 'Samuel L. Jackson'],
				'year': 2014,
				'category': 'Sci Fi',
			},
			{
				'img': './img/exmachina.jpg',
				'name': 'Ex Machina',
				'cast': ['Alicia Vikander', 'Domhnall Gleeson', 'Oscar Isaac'],
				'year': 2015,
				'category': 'Sci Fi'
			}
		]
	}


})();
