function Jukebox() {
    this.songs = [];
    var self = this;
    track = 0;
    this.audioPlayer = document.getElementById('audioPlayer');
    this.audioSrc = document.getElementById('mp3');
    this.playButton = document.getElementById('play');
    this.pauseButton = document.getElementById('pause');
    this.stopButton = document.getElementById('stop');
    this.skipForwardButton = document.getElementById('skipForward');
    this.skipBackwardButton = document.getElementById('skipBackward');
    this.shuffleButton = document.getElementById('shuffle');
    this.displaySong = document.getElementById('displaySong');
    
    this.addSong = function(song) {
        this.songs.push(song);
    }
    
    this.setup = function() {
        self.audioSrc.src = "songs/" + this.songs[track].source;
        self.audioPlayer.load();
        self.displaySong.innerHTML = "Artist: " + self.songs[track].artist + "<br>Album: " + self.songs[track].album + "<br>Title: " + (track + 1) + '. ' + self.songs[track].title;
    }

    this.loadPlay = function() {
        self.setup();
        self.play();
    }
    
    this.play = function() {
        self.audioPlayer.play();
    }
    
    this.playButton.addEventListener('click', this.play);
    
    this.pause = function() {
        self.audioPlayer.pause();
    }
    
    this.pauseButton.addEventListener('click', this.pause);
    
    this.stop = function() {
        self.audioPlayer.load();
    }
    
    this.stopButton.addEventListener('click', this.stop);

    this.skipForward = function() {
        track++;
        if (track >= self.songs.length) {
            track = 0;
        }
        self.loadPlay();
    }
    
    this.skipForwardButton.addEventListener('click', this.skipForward);
    
    this.skipBackward = function() {
        track--;
        if (track < 0) {
            track = self.songs.length - 1;
        }
        self.loadPlay();
    }
    
    this.skipBackwardButton.addEventListener('click', this.skipBackward);

    this.shuffle = function() {
        track = Math.floor(Math.random() * self.songs.length);
        self.loadPlay();
    }

    this.shuffleButton.addEventListener('click', this.shuffle);
}

function Song(artist, album, title, source) {
    this.artist = artist;
    this.album = album;
    this.title = title;
    this.source = source;
}

var jukebox = new Jukebox();

jukebox.addSong(new Song('Quantum Jazz', 'End of Line', 'Intro', 'Quantum_Jazz_01_Intro.mp3'));
jukebox.addSong(new Song('Quantum Jazz', 'End of Line', "If I Can't Dance Its Not My Revolution", 'Quantum_Jazz_02_If_I_Cant_Dance_Its_Not_My_Revolution.mp3'));
jukebox.addSong(new Song('Quantum Jazz', 'End of Line', 'Jingle Jazz', 'Quantum_Jazz_03_Jingle_Jazz.mp3'));
jukebox.addSong(new Song('Quantum Jazz', 'End of Line', 'All About The Sun', 'Quantum_Jazz_04_All_About_The_Sun.mp3'));
jukebox.addSong(new Song('Quantum Jazz', 'End of Line', 'Passing Fields', 'Quantum_Jazz_05_Passing_Fields.mp3'));
jukebox.addSong(new Song('Quantum Jazz', 'End of Line', 'Balcarabic Chicken', 'Quantum_Jazz_06_Balcarabic_Chicken.mp3'));
jukebox.addSong(new Song('Quantum Jazz', 'End of Line', 'Orbiting A Distant Planet', 'Quantum_Jazz_07_Orbiting_A_Distant_Planet.mp3'));
jukebox.setup();