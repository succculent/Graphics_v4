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
        this.audio.autoplay = true;
        this.audio.src = song;
        this.audio.loop = true;
        this.source = this.audioCtx.createMediaElementSource( this.audio );
        this.source.connect( this.analyser );
        this.source.connect( this.audioCtx.destination );
    }
    onTick( )
    {
        this.analyser.getByteFrequencyData( this.data );
    }
    toggleAudio( ) {
        if (this.pauseFlag) {
            this.audioCtx.resume(); // Resume the AudioContext
            this.pauseFlag = !this.pauseFlag;
        }
        else {
            this.audioCtx.suspend(); // Pause the AudioContext
            this.pauseFlag = !this.pauseFlag;
        }
    }
};