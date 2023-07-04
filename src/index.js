import _ from 'lodash';
import './style.css';
// import './skeleton.css';
// import './normalize.css';
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
import gitIcon from './assets/github.png'
import instaIcon from './assets/insta.png'
import soundIcon from './assets/soundcloud.png'
import linkedIcon from './assets/linked.png'
import twitterIcon from './assets/twitter.png'
import spotifyIcon from './assets/spotify.png'
import AudioInstance from './Components/Audio.js'
import Renderer from './Components/Renderer.js' 
import scene1 from './Scenes/scene1.js'
import scene2 from './Scenes/scene2.js'
import scene3 from './Scenes/scene3.js'
import scene4 from './Scenes/scene4.js'
import scene5 from './Scenes/scene5.js'
import scene6 from './Scenes/scene6.js'
import titlescene from './Scenes/titlescene.js'


function createLink(url, icon, alt) {
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    var icon_ = document.createElement('img');
    icon_.src = icon;
    icon_.alt = alt;
    link.appendChild(icon_);
    return link;
}

function component() {

    const element = document.createElement( 'div' );

    //sizes 

    var title_sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    var sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    //canvas DOMs

    var canvas = document.createElement( 'canvas' );
    var tsCanvas = document.createElement( 'canvas' );

    // links

    var links = document.createElement( 'div' );
    // Resume link
    var githubLink = document.createElement('a');
    githubLink.href = 'https://drive.google.com/file/d/1Qh7QOlZFFLYxZgJqM85K4HkvnbGtgqqT/view?usp=sharing';
    githubLink.target = '_blank';
    githubLink.innerHTML = 'A.T.';
    githubLink.setAttribute('download', 'Ada Toydemir Resume.pdf');
    links.appendChild(githubLink);
    // Instagram link
    var instagramLink = createLink( 'https://www.instagram.com/simulacrum_._/', instaIcon, "Instagram");
    links.appendChild(instagramLink);
    // LinkedIn
    var linkedInLink = createLink( 'https://www.linkedin.com/in/ada-toydemir/', linkedIcon, "LinkedIn");
    links.appendChild(linkedInLink);
    // Twitter link
    var twitterLink = createLink( 'https://twitter.com/__simulacrum', twitterIcon, "Twitter");
    links.appendChild(twitterLink);
    // GitHub link
    var githubLink = createLink( 'https://github.com/succculent', gitIcon, "Github" );
    links.appendChild(githubLink);
    // SoundCloud link
    var soundcloudLink = createLink( 'https://soundcloud.com/music-simulacrum', soundIcon, "Soundcloud" );
    links.appendChild(soundcloudLink);
    // Spotify link
    var spotifyLink = createLink( 'https://open.spotify.com/user/1273607190?si=48a04ac4d7d047da', spotifyIcon, "Spotify" );
    links.appendChild(spotifyLink);


    // about (name)

    var about = document.createElement( 'p' );
    about.innerText = "Ada Toydemir";

    //inst

    var inst = document.createElement( 'div' );
    var desc1 = document.createElement( 'p' );
    desc1.innerText = 'TAP/SPACE to play/pause music\n';
    var desc2 = document.createElement( 'p' );
    desc2.innerText = 'UP/DOWN to change songs\n';
    var desc3 = document.createElement( 'p' );
    desc3.innerText = 'RIGHT/LEFT to change visuals\n';
    inst.appendChild(desc1);
    inst.appendChild(desc2);
    inst.appendChild(desc3);

    //DOM classes

    canvas.classList.add( 'webgl' );
    canvas.classList.add( 'AV' );
    tsCanvas.classList.add( 'webgl' );
    tsCanvas.classList.add( 'tsCanvas' );
    inst.classList.add( 'box' );
    about.classList.add( 'box' );
    about.classList.add( 'hidden' );
    links.classList.add( 'links' );

    //append DOM

    element.append( canvas );
    element.append( tsCanvas );
    element.append( inst );
    element.append( about );
    element.append( links );

    //audio track

    let A = new AudioInstance( 2048 );
    let songs = [ song1, song2, song3, song4, song5, song6, song7, song8, song9, song10 ];
    let curSongIndex = 0;
    A.loadTrack( songs[curSongIndex] );
    element.appendChild( A.audio );

    //scene track

    let scen1 = new scene1( sizes, A );
    let scen2 = new scene2( sizes, A );
    let scen3 = new scene3( sizes, A );
    let scen6 = new scene6( sizes, A );
    let titc = new titlescene( title_sizes, A );
    let scenes = [ scen1, scen2, scen3, scen6 ];
    let curSceneIndex = 0;
    let curScene = scenes[ curSceneIndex ];

    //renderers

    let R = new Renderer( canvas, sizes );
    let R2 = new Renderer( tsCanvas, title_sizes );

    //resizing

    window.addEventListener( 'resize', ( ) =>
    {
        title_sizes.width = window.innerWidth;
        title_sizes.height = window.innerHeight;
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        curScene.resize( sizes );
        titc.resize( title_sizes );
    });

    //key listeners

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

    //mobile swipe listener 

    var startX, startY, endX, endY;
    var minDistance = 20;

    window.addEventListener( "touchstart", function ( event ) {
      var touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    });

    window.addEventListener( "touchend", function ( event ) {
      var touch = event.changedTouches[0];
      endX = touch.clientX;
      endY = touch.clientY;
      var deltaX = endX - startX;
      var deltaY = endY - startY;
      if (Math.abs(deltaX) <= minDistance || Math.abs(deltaY) <= minDistance) {
        A.toggleAudio( );
        if (!desc1.classList.contains('hidden')) desc1.classList.add('hidden');
      } else {
        if (Math.abs(deltaX) < Math.abs(deltaY)) {
          if (deltaY > 0) { //down
            if ( curSongIndex == 0 ) curSongIndex = songs.length - 1;
            else curSongIndex--;
            A.loadTrack( songs[curSongIndex] );
            if (!desc2.classList.contains('hidden')) desc2.classList.add('hidden');
          } else { //up
            curSongIndex = ( curSongIndex + 1 ) % songs.length;
            A.loadTrack( songs[curSongIndex] );
            if (!desc2.classList.contains('hidden')) desc2.classList.add('hidden');
          }
        } else {
          if (deltaX > 0) { //right
            curSceneIndex = ( curSceneIndex + 1 ) % scenes.length;
            curScene = scenes[ curSceneIndex ];
            if (!desc3.classList.contains('hidden')) desc3.classList.add('hidden');
          } else { //left
            if ( curSceneIndex == 0 ) curSceneIndex = scenes.length - 1;
            else curSceneIndex--;
            curScene = scenes[ curSceneIndex ];
            if (!desc3.classList.contains('hidden')) desc3.classList.add('hidden');
          }
        }
      }
    });

    //render loop

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