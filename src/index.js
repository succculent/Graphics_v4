import _ from 'lodash';
import './style.css';
import './skeleton.css';
import './normalize.css';
import * as THREE from 'three'
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
import gitIcon from './assets/icons/github-logo.svg'
import instaIcon from './assets/icons/insta-logo.svg'
import soundIcon from './assets/icons/soundcloud-backup.svg'
import linkedIcon from './assets/icons/linked-logo.svg'
import twitterIcon from './assets/icons/twitter-logo.svg'
import spotifyIcon from './assets/icons/spotify-logo.svg'
import AudioInstance from './Components/Audio.js'
import Renderer from './Components/Renderer.js' 
import scene1 from './Scenes/scene1.js'
import scene2 from './Scenes/scene2.js'
import scene3 from './Scenes/scene3.js'
import scene4 from './Scenes/scene4.js'
import scene5 from './Scenes/scene5.js'
import scene6 from './Scenes/scene6.js'
import titlescene from './Scenes/titlescene.js'


function createLink(url, txt, icon) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    if (txt != null) link.innerText = txt;
    else {
      var icon = document.createElement('img');
      icon.src = icon;
      link.appendChild(icon);
    }
    return link
}

function component() {
    /*
     * Page Setup
     */
    const element = document.createElement( 'div' );

    var title_sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    var sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    //glsl background
    var canvas = document.createElement( 'canvas' );

    //sections
    var inst = document.createElement( 'div' );
    var me = document.createElement( 'div' );

    //ts - comment this out when ready
    var tsCanvas = document.createElement( 'canvas' );

    //me
    // links - me
    var links = document.createElement( 'div' );
    // Resume link
    var githubLink = createLink( 'https://drive.google.com/file/d/1Qh7QOlZFFLYxZgJqM85K4HkvnbGtgqqT/view?usp=sharing', 'Resume', null );
    links.appendChild(githubLink);
    // GitHub link
    var githubLink = createLink( 'https://github.com/succculent', null, gitIcon );
    links.appendChild(githubLink);
    // LinkedIn
    var linkedInLink = createLink( 'https://www.linkedin.com/in/ada-toydemir/', null, linkedIcon);
    links.appendChild(linkedInLink);
    // Instagram link
    var instagramLink = createLink( 'https://www.instagram.com/simulacrum_._/', null, instaIcon);
    links.appendChild(instagramLink);
    // Twitter link
    var twitterLink = createLink( 'https://twitter.com/__simulacrum', null, twitterIcon );
    links.appendChild(twitterLink);
    // SoundCloud link
    var soundcloudLink = createLink( 'https://soundcloud.com/music-simulacrum', null, soundIcon );
    links.appendChild(soundcloudLink);
    // Spotify link
    var spotifyLink = createLink( 'https://open.spotify.com/user/1273607190?si=48a04ac4d7d047da', null, spotifyIcon );
    links.appendChild(spotifyLink);
    // about - me
    var about = document.createElement( 'p' );
    about.innerText = "Ada Toydemir";

    //inst
    var desc1 = document.createElement( 'p' );
    desc1.innerText = 'use SPACE to play/pause music\n';
    var desc2 = document.createElement( 'p' );
    desc2.innerText = 'use UP and DOWN to cycle tracks\n';
    var desc3 = document.createElement( 'p' );
    desc3.innerText = 'use RIGHT and LEFT to cycle visuals\n';
    inst.appendChild(desc1);
    inst.appendChild(desc2);
    inst.appendChild(desc3);

    //classes
    canvas.classList.add( 'webgl' );
    canvas.classList.add( 'AV' );
    tsCanvas.classList.add( 'webgl' );
    tsCanvas.classList.add( 'tsCanvas' );
    inst.classList.add( 'box' );
    about.classList.add( 'box' );
    about.classList.add( 'hidden' );
    links.classList.add( 'links' );

    //append sections
    element.append( canvas );
    element.append( tsCanvas );
    element.append( inst );
    element.append( about );
    element.append( links );

    let A = new AudioInstance( 2048 );
    let songs = [ song1, song2, song3, song4, song5, song6, song7, song8, song9, song10 ];
    let curSongIndex = 0;
    A.loadTrack( songs[curSongIndex] );
    element.appendChild( A.audio );

    let scen1 = new scene1( sizes, A );
    let scen2 = new scene2( sizes, A );
    let scen3 = new scene3( sizes, A );
    let scen6 = new scene6( sizes, A );
    let titc = new titlescene( title_sizes, A );
    let scenes = [ scen1, scen2, scen3, scen6 ];
    let curSceneIndex = 0;
    let curScene = scenes[ curSceneIndex ];

    let R = new Renderer( canvas, sizes );
    let R2 = new Renderer( tsCanvas, title_sizes );

    window.addEventListener( 'resize', ( ) =>
    {
        title_sizes.width = window.innerWidth;
        title_sizes.height = window.innerHeight;
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        curScene.resize( sizes );
        titc.resize( title_sizes );
    });

    window.addEventListener( "keydown", function ( event ) {
        if ( event.defaultPrevented ) {
          return; // Do nothing if the event was already processed
        }
        switch ( event.key ) {
          case "ArrowDown":
            if ( curSongIndex == 0 ) curSongIndex = songs.length - 1;
            else curSongIndex--;
            A.loadTrack( songs[curSongIndex] );
            if (!desc2.classList.contains('hidden')) desc2.classList.add('hidden');
            break;
          case "ArrowUp":
            curSongIndex = ( curSongIndex + 1 ) % songs.length;
            A.loadTrack( songs[curSongIndex] );
            if (!desc2.classList.contains('hidden')) desc2.classList.add('hidden');
            break;
          case "ArrowLeft":
            if ( curSceneIndex == 0 ) curSceneIndex = scenes.length - 1;
            else curSceneIndex--;
            curScene = scenes[ curSceneIndex ];
            if (!desc3.classList.contains('hidden')) desc3.classList.add('hidden');
            break;
          case "ArrowRight":
            curSceneIndex = ( curSceneIndex + 1 ) % scenes.length;
            curScene = scenes[ curSceneIndex ];
            if (!desc3.classList.contains('hidden')) desc3.classList.add('hidden');
            break;
          case " ":
            A.toggleAudio( );
            if (!desc1.classList.contains('hidden')) desc1.classList.add('hidden');
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
        A.onTick( );
        R.render( curScene.scene, curScene.C.camera );
        R2.render( titc.scene, titc.C.camera );
        curScene.tick( deltaTime, elapsedTime, A );
        titc.tick( deltaTime, elapsedTime, A );

        if ( desc3.classList.contains('hidden') && desc2.classList.contains('hidden') && desc1.classList.contains('hidden') && about.classList.contains('hidden')) {
          about.classList.remove('hidden');
          about.classList.add('visible');
        }

        window.requestAnimationFrame( tick );
    };
    tick( );

    return element;
}

document.body.appendChild( component() );