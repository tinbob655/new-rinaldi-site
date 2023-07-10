import React, {Component} from 'react';
import './flappyBirdStyles.scss'
import {isMobile} from '../../../../index.js';

var difficultyMultiplyer:number = 1;
var gameStarted:boolean = false;
var obstNo:number = -1;

function moveObst(obstNo:number) {
    //moved an obst from the right to left of the play area
    const obst:any = document.getElementById('obst'+obstNo);
    //randomly position the obst vertically
    obst.style.top = String(Math.random() * 94) +'%';
    //begin move animation
    obst.classList.add('moving');
    setTimeout(() => {
        //after movement, reset the obst
        obst.classList.remove('moving');
    }, 2500);
};

async function increaseDifficulty() {
    //minimum difficulty mod is 10
    if (difficultyMultiplyer < 19) {
        difficultyMultiplyer = difficultyMultiplyer + 1;
        console.log(difficultyMultiplyer);

        //delay then repeat
        await delay(5000);
        if (gameStarted == true) {
            increaseDifficulty();
        };
    };

    return null;
};


function delay(millisec:number) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    });
};

async function repeatingObstMover() {
    //make sure the game is active
    if (gameStarted == true) {
        obstNo++;
        moveObst((obstNo++)%document.querySelectorAll('.obst').length);
        await delay(100 * (20-difficultyMultiplyer));
        repeatingObstMover();
        return null;
    };
    return null;
};

async function birdJump() {
    const bird:any = document.getElementById('bird');
    const originalMarginBottom:number = Number(bird.style.bottom.replace('px', ''));

    //bird on way up
    for (let i = 0; i < 100; i = i + 5) {
        bird.style.bottom = originalMarginBottom + i + 'px';
        
        //delay is non-linear to simulate gravity
        await delay(1 + ((i^5)/4));
    };
    
    //if at any point jump is pressed again, stop going down
    let stopFalling:boolean = false;
    document.addEventListener('click', function cancelFall() {stopFalling = true; document.removeEventListener('click', cancelFall)});

    //bird on way down
    while (bird.style.bottom != '0px' && stopFalling ==  false) {
        let bottom = bird.style.bottom.replace('px', '');
        bird.style.bottom = Number(bottom) - 5 + 'px';

        //delay gets bigger with height to simulate gravity
        await delay(Number((bird.style.bottom.replace('px', ''))/100) + 10);
    };
}

async function startGame() {
    gameStarted = true;
    
    //begin showing obsts
    repeatingObstMover();

    //begin incrementing diff
    setTimeout(() => {
        increaseDifficulty();
    }, 5000);
    
    //add the event listener for pressing space and having the bird jump
    await delay(100);
    window.addEventListener('click', function() {birdJump()});

    //render the bird
    const bird:any = document.getElementById('bird');
    bird.style.opacity = 1.0;
};

class FlappyBird extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>
                    NewRinaldi brings to you: Flappy Bird
                </h1>
                <p>
                    THIS IS NOT DONE YET, RELEASING SOON! <br/>(Feel free to test the game tho)
                </p>

                <button id="startButton" type="button" onClick={function() {
                    startGame();
                    const thisButton:any = document.getElementById('startButton');
                    thisButton.style.opacity = 0.3;
                    thisButton.style.transform = 'scale(0.75, 0.75)';
                    thisButton.onClick = null;
                }}>
                    <p>
                        {isMobile() == true ? 'Tap ' : 'Click '} here to begin the game
                    </p>
                </button>

                {isMobile() == true ? (<p>This game is approx. very much easier if u make ur phone landscape BTW</p>) : (<></>)}

                <div id="mainGameBoard">
                    <div id="bird"></div>
                    {this.getAllObstacles()}
                </div>

            </React.Fragment>
        );
    };

    getAllObstacles() {
        let obstacleHTML:Array<any> = [];

        //generate HTML for 100 obsts
        for (let obstNo = 0; obstNo < 100; obstNo++) {
            obstacleHTML.push(
                <React.Fragment>
                    <div className="obst" id={"obst"+obstNo}></div>
                </React.Fragment>
            );
        };

        //now return the HTML to the main script
        return obstacleHTML;
    };
};

export default FlappyBird;