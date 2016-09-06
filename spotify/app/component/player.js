(function() {
    'use strict';
    var spotifyPlayer = {
        templateUrl: './app/component/player.html',
        controller: spotifyCtrl
    }

    angular
        .module('spotify')
        .component('spotifyPlayer', spotifyPlayer);

    spotifyCtrl.$inject = ['apiSpotify'];

    function spotifyCtrl(apiSpotify) {
        var spotify = this;
        spotify.query = null;
        spotify.results = null;
        spotify.albums = null;
        spotify.albumSelected = null;
        spotify.song = null;
        spotify.artist = null;
        spotify.audio = new Audio;
        spotify.play = play;
        spotify.milliseconds = milliseconds;

        spotify.searchArtist = doSearchArtist;
        spotify.searchSong = doSearchSong;
        spotify.getAlbums = getAlbums;

        function milliseconds(ms) {
            var min = Math.floor((ms / 1000 / 60));
            var sec = Math.floor((ms / 1000) % 60);
            return min + ':' + sec;
        }

        function play(song) {
            spotify.song = song;
            spotify.audio.src = song.preview_url;
            spotify.audio.pause();
            spotify.audio.play();
        }

        function doSearchArtist() {
            var search = apiSpotify.artists;
            console.log(spotify.query);
            search.get({ artist: spotify.query })
                .$promise.then(function(response) {
                    spotify.albums = null;
                    spotify.results = response.artists.items;
                });
        }

        function doSearchSong(album) {
            spotify.albumSelected = album;
            var searchData = apiSpotify.songs;
            searchData.get({ albumId: album.id })
                .$promise.then(function(response) {
                    spotify.albums = null;
                    spotify.playlist = response.items;
                    console.log(spotify.playlist);
                })
        }

        function getAlbums(artist) {
            spotify.artist = artist;
            var results = apiSpotify.albums;
            results.get({ artistId: artist.id })
                .$promise.then(function(response) {
                    spotify.results = null;
                    spotify.albums = response.items;
                })
        }


    }


})()
