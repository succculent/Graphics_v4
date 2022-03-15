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
import scene5 from './Scenes/scene5.js'
import scene6 from './Scenes/scene6.js'

function component() {
    /*
     * Page Setup
     */
    const element = document.createElement( 'div' );
    var canvas = document.createElement( 'canvas' );
    canvas.classList.add( 'webgl' );
    element.appendChild( canvas );

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
    let s5 = new scene5( sizes, A );
    let s6 = new scene6( sizes, A );
    let scenes = [ s1, s2, s3, s5, s6 ];
    let curSceneIndex = 3;
    let curScene = scenes[ curSceneIndex ];

    let R = new Renderer( canvas, sizes );

    window.addEventListener( 'resize', ( ) =>
    {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        curScene.resize( sizes );
    });

    window.addEventListener( "keydown", function ( event ) {
        if ( event.defaultPrevented ) {
          return; // Do nothing if the event was already processed
        }
        switch ( event.key ) {
          case "ArrowDown":
            // code for "down arrow" key press.
            break;
          case "ArrowUp":
            // code for "up arrow" key press.
            break;
          case "ArrowLeft":
            if ( curSceneIndex == 0 ) curSceneIndex = scenes.length - 1;
            else curSceneIndex--;
            curScene = scenes[ curSceneIndex ];
            break;
          case "ArrowRight":
            curSceneIndex = ( curSceneIndex + 1 ) % scenes.length;
            curScene = scenes[ curSceneIndex ];
            break;
          default:
            return; // Quit when this doesn't handle the key event.
        }
      
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }, true);

    const clock = new THREE.Clock( );
    const tick = ( ) =>
    {   
        var deltaTime = clock.getDelta( );
        var elapsedTime = clock.getElapsedTime( );
        // curScene = scenes[ Math.floor( elapsedTime/8 ) % 4 ];
        A.onTick();
        R.render( curScene.scene, curScene.C.camera );
        curScene.tick( deltaTime, elapsedTime, A );
        window.requestAnimationFrame( tick );
    };
    tick( );

    return element;
}

document.body.appendChild( component() );