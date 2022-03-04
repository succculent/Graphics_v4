export default class AudioInstance
{
    /*
     * fftSize must be a power of 2
     */
    constructor( fftSize )
    {
        //get audio into ear
        this.audio = new Audio( );
        this.audioCtx = new AudioContext( );
        this.analyser = this.audioCtx.createAnalyser( );
        this.analyser.fftSize = fftSize;
        this.data = new Uint8Array( this.analyser.frequencyBinCount );
    }
    loadTrack( song )
    {
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
};