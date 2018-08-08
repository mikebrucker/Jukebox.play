function Jukebox() {
    this.songs = []

    this.addSong = function(song) {
        this.songs.push(song);
    }
}

function Song(artist, album, title, source) {
    this.artist = artist;
    this.album = album;
    this.title = title;
    this.source = source;

    this.songInfo = function() {
        return 'Artist: ' + this.artist + ', Album: '  + this.album + ' Title: ' + this.title;
    }
}