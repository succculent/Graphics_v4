import _ from 'lodash';
import './style.css';
import * as THREE from 'three'
import song1 from './assets/song1.mp3'
import AudioInstance from './Components/Audio.js'
import Renderer from './Components/Renderer.js' 
import scene1 from './Scenes/scene1.js'
import scene2 from './Scenes/scene2.js'
import scene3 from './Scenes/scene3.js'
import scene4 from './Scenes/scene4.js'

function component() {
    /*
     * Page Setup
     */
    const element = document.createElement( 'div' );
    var canvas = document.createElement( 'canvas' );
    canvas.classList.add( 'webgl' );
    element.appendChild( canvas );

    // const leftButton = document.createElement( 'button' );
    // leftButton.classList.add( 'arrow' );
    // leftButton.classList.add( 'l' );
    // element.appendChild( leftButton );

    // const rightButton = document.createElement( 'button' );
    // rightButton.classList.add( 'arrow' );
    // rightButton.classList.add( 'r' );
    // element.appendChild( rightButton );

    var sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    let A = new AudioInstance( 2048 );
    A.loadTrack( song1 );
    element.appendChild( A.audio );

    let s1 = new scene1( sizes, A );
    let s2 = new scene2( sizes, A );
    let s3 = new scene3( sizes, A );
    let s4 = new scene4( sizes, A );
    let scenes = [s1, s2, s3, s4];
    let curScene = scenes[3];

    let R = new Renderer( canvas, sizes );

    window.addEventListener( 'resize', ( ) =>
    {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        curScene.resize( sizes );
    });

    const clock = new THREE.Clock( );
    const tick = ( ) =>
    {   
        var deltaTime = clock.getDelta( );
        var elapsedTime = clock.getElapsedTime( );
        curScene = scenes[ Math.floor( elapsedTime/8 ) % 4 ];
        A.onTick();
        R.render( curScene.scene, curScene.C.camera );
        curScene.tick( deltaTime, elapsedTime, A );
        window.requestAnimationFrame( tick );
    };
    tick( );

    return element;
}

document.body.appendChild( component() );