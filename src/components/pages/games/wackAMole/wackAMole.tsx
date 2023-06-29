import React, {Component} from 'react';
import './wackAMoleStyles.scss';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

var difficultyMod:number = 10.25;
var lives:number = 3;
var score:number = 0;

async function showAMole() {
    const timer = (milliseconds: number | undefined) => new Promise (res => setTimeout(res, milliseconds));
    score++;
    const scoreDisplay:any = document.getElementById('scoreCounter');
    scoreDisplay.innerText = 'Score: ' + String(score);
    let mole:number = Math.floor(Math.random()*100);
    let moleToShow:any = document.getElementById('mole'+mole);
    moleToShow.classList.add('shown');
    checkLifeLost(mole)
    difficultyMod > 1.5 ? difficultyMod -= 0.25 : difficultyMod = 1.5;
    await timer(200*difficultyMod);
    showAMole();
};

async function checkLifeLost(mole:number) {
    const delay = (ms: number | undefined) => new Promise (res => setTimeout(res, ms));
    const liveCounter:any = document.getElementById('liveCounter');
    let moleInQuestion:any = document.getElementById('mole'+mole);
    //give the user a chance to click the mole
    await delay(1000);
    //if the user fails to click the mole
    if (!moleInQuestion.classList.contains('clicked')) {
        //loose a life
        lives > 0 ? lives-- : lives = 0;
        if (lives <= 0) {
            gameOver();
        };
        liveCounter.innerText = 'Lives: '+lives
        moleInQuestion.classList.remove('shown');
        liveCounter.classList.add('liveLost');
        moleInQuestion.classList.add('failed');
        setTimeout(() => {
            liveCounter.classList.remove('liveLost')
        }, 1010);
    };
};

function gameOver() {
    const gameOverScreen:any = document.getElementById('gameOverScreen');
    gameOverScreen.classList.add('shown');
};

function startGame() {

    //play audio
    const audio:any = document.getElementById('audioLoop');
    const storage = getStorage();
    getDownloadURL(ref(storage, 'Music/MarchOfLeaderRansomeV2.mp3'))
        .then((url) => {
            audio.src = url;
            audio.play();
        });

    const startButton:any = document.getElementById('startButton');
    startButton.style.opacity = 0.2;
    score = 0;
    showAMole();
};

//load all moles (after page is loaded)
//only load if wack a mole is the selected gae
if (sessionStorage.getItem('currentGame') == 'wackAMole') {
    //load after a delay to prevent the DOM being undefined
    setTimeout(() => {
        var molesHTML:string = '';
        //calculate the height and width of the board in px
        const wackAMoleBoard:any = document.getElementById('wackAMoleBoard');
            //height
        let boardHeight:number = wackAMoleBoard.style.height.replace('vh', '');
        boardHeight = (boardHeight * window.innerHeight / 100) -50;
            //width
        let boardWidth:number = wackAMoleBoard.style.width.replace('vw', '');
        boardWidth = (boardWidth * window.innerWidth / 100) -45;
    
        //load all moles
        for (let i = 0; i < 100; i++) {
            let marginTop:string = String(Math.floor(Math.random()*boardHeight)) + 'px';
            let marginLeft:string = String(Math.floor(Math.random()*boardWidth)) + 'px';
            molesHTML += (
                `<div id="mole`+i+`" class="mole" onclick="
                this.classList.add('clicked');" style="margin-left: `+marginLeft+`; margin-top: `+marginTop+`;"></div>`
            );
        };
        const board:any = document.getElementById('wackAMoleBoard');
        board.innerHTML = molesHTML;
    }, 500);
};

class WackAMole extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="gameOverScreen">
                    <h1 style={{color: 'red', paddingTop: '30vh'}}>
                        You lost (fool)
                    </h1>
                    <button type="button" onClick={function() {
                        const body:any = document.body;
                        body.style.opacity = 0.0;
                        setTimeout(() => {
                            document.location.reload();
                        }, 1001);
                    }}>
                        <p style={{color: 'red'}}>
                            <br/><br/><br/><br/>
                            Try again?
                        </p>
                    </button>
                </div>

                <h1>
                    NewRinaldi brings to you: Wack a mole
                </h1>

                <div className="contentLine"></div>

                <button type="button" id="startButton" onClick={startGame}>
                    <p>
                        Click here to start. Then click on the squares when they appear!
                    </p>
                </button>

                <p id="liveCounter" className="display">
                    Lives: {lives}
                </p>

                <p id="scoreCounter" className="display">
                    Score: {score}
                </p>

                <div id="wackAMoleBoard" style={{height: '60vh', width: '80vw'}}></div>
            </React.Fragment>
        );
    };
};

export default WackAMole;