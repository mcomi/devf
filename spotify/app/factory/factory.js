(function () {
	'use strict';

	angular
		.module('spotify')
		.factory('apiSpotify', apiSpotify);

	apiSpotify.$inject = ['$resource'];

	function apiSpotify ($resource) {	
		return {
			artists: $resource('https://api.spotify.com/v1/search?q=:artist&type=artist', { artist: '@_query' }),

			albums: $resource('https://api.spotify.com/v1/artists/:artistId/albums?album_type=album&market=MX',{ artistId: '@_artistId' }),

			songs : $resource('https://api.spotify.com/v1/albums/:albumId/tracks', { albumId : '@_albumId' }),
		};
	}

})();
