import song1 from './assets/song1.mp3'
import song2 from './assets/song2.mp3'
import song3 from './assets/song3.mp3'
import song4 from './assets/song4.mp3'
import song5 from './assets/song5.mp3'
import song6 from './assets/song6.mp3'
import song7 from './assets/song7.mp3'
import song8 from './assets/song8.mp3'
import song9 from './assets/song9.mp3'
import song10 from './assets/song10.mp3'

export default class AudioInstance
{
    /*
     * fftSize must be a power of 2
     */
    constructor( fftSize )
    {
        this.audio = new Audio( );
        this.audioCtx = new AudioContext( );
        this.analyser = this.audioCtx.createAnalyser( );
        this.fft = fftSize;
        this.analyser.fftSize = fftSize;
        this.data = new Uint8Array( this.analyser.frequencyBinCount );
        this.pauseFlag = false;
        this.initFlag = true;
        this.songs = [ song1, song2, song3, song4, song5, song6, song7, song8, song9, song10 ];
        this.curSongIndex = 0;
        loadTrack( this.songs[this.curSongIndex] );

    }
    destructor( )
    {
        this.audioCtx.close( );
    } 
    loadTrack( song )
    {
        this.audioCtx.close( );
        this.audioCtx = new AudioContext( );
        this.analyser = this.audioCtx.createAnalyser( );
        this.analyser.fftSize = this.fft;
        this.audio.autoplay = false;
        this.audio.src = song;
        this.audio.loop = true;
        this.source = this.audioCtx.createMediaElementSource( this.audio );
        this.source.connect( this.analyser );
        this.source.connect( this.audioCtx.destination );
    }
    onTick( )
    {
        if (this.audio.ended) nextSong( )
        this.analyser.getByteFrequencyData( this.data );
    }
    toggleAudio( ) {
        if (this.pauseFlag) {
            this.audioCtx.resume(); // Resume the AudioContext
            this.pauseFlag = false;
        }
        else {
            this.audioCtx.suspend(); // Pause the AudioContext
            this.pauseFlag = true;
        }
    }
    init( ) {
        this.initFlag = false;
        this.audio.play( );
    }
    prevSong( ) {
        if ( this.curSongIndex == 0 ) this.curSongIndex = this.songs.length - 1;
        else this.curSongIndex--;
        loadTrack( this.songs[this.curSongIndex] );
    }
    nextSong( ) {
        this.curSongIndex = ( this.curSongIndex + 1 ) % this.songs.length;
        loadTrack( this.songs[this.curSongIndex] );
    }
};