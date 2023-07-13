import React, {Component} from 'react';
import './flappyBirdStyles.scss'

var difficultyMultiplyer:number = 1;
var gameStarted:boolean = false;
var obstNo:number = -1;

async function moveObst(obstNo:number) {
    //moved an obst from the right to left of the play area
    const obst:any = document.getElementById('obst'+obstNo);
    //randomly position the obst vertically
    obst.style.top = String(Math.random() * 94) +'%';
    //begin move animation
    obst.style.visibility = 'visible';
    for (let i = 100; i > 0; i = i - 1) {
        obst.style.left = i + '%';
        await delay(30 - (difficultyMultiplyer * 1.25));
    };
    //get rid of the obst after it has done its animation
    obst.style.left = '100%';
    obst.style.top = '200%';
    obst.style.visibility = 'hidden';
};

async function increaseDifficulty() {
    //minimum difficulty mod is 10
    if (difficultyMultiplyer < 19) {
        difficultyMultiplyer = difficultyMultiplyer + 1;

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
    const originalMarginBottom:number = Number(bird.style.bottom.replace('%', ''));

    //bird on way up
    let distanceGainedByJump:number = 15; //the distance in % which will be gained by one jump
    for (let i = 0; i < distanceGainedByJump; i = i + (distanceGainedByJump/20)) {
        bird.style.bottom = originalMarginBottom + i + '%'
        
        //delay is non-linear to simulate gravity
        await delay(1 + ((i^5)/4));
    };
    
    //if at any point jump is pressed again, stop going down
    let stopFalling:boolean = false;
    document.addEventListener('click', function cancelFall() {stopFalling = true; document.removeEventListener('click', cancelFall)});

    //bird on way down
    while (bird.style.bottom.replace('%', '') > 0 && stopFalling ==  false) {
        let bottom = bird.style.bottom.replace('%', '');
        bird.style.bottom = (Number(bottom) - 1) + '%';

        //delay gets bigger with height to simulate gravity
        await delay(Number((bird.style.bottom.replace('%', ''))/100) + 10);
    };
}

async function lossChecker() {
    if (gameStarted == true) {

        //first check if the player has hit the top or the bottom of the area
        const bird:any = document.getElementById('bird');
        const bottom:number = bird.style.bottom.replace('%', '');
        if (bottom > 99 || bottom < 1) {
            gameOver();
            return null;
        };
    
        //then check if the player has hit an obst
        const birdX:number = bird.style.left.replace('%', '');

        //repeat for each obst
        document.querySelectorAll('.obst').forEach((obst:any) => {

            //asssign coordinate variables for the current obst
            let obstX:number = obst.style.left.replace('%', '');
            let obstY:number = obst.style.top.replace('%', '');
            let birdY:number = 100 - bird.style.bottom.replace('%', '');

            //check the y-coords match up
            if (obstY > (birdY - 6) && obstY < (birdY - 3)) {

                //if the x-coords match up, check the x-coords match up
                if (obstX > (birdX - 1) && obstX < (birdX + 3)) {

                    //collision has occured
                    gameOver();
                    return null;
                };
            };
        });
    
        //if the player has not lost, then repeat the check after a delay so long as the game is still ongoing
        await delay(20);
        lossChecker();
    };

};

function gameOver() {
    gameStarted = false;

    //frontend
    const gameOverScreen:any = document.getElementById('gameOverScreen');
    const gameOverText:any = document.getElementById('gameOverText');
    gameOverText.innerText = "Pahahahhhahhahah, hahaaaaaahaaaaaa\n\nU lost, thats funny, click here to go again (u literally can't win btw).";
    gameOverScreen.classList.add('shown');

    setTimeout(() => {
        const restartButton:any = document.getElementById('restartButton');
        restartButton.style.visibility = 'visible';
        restartButton.style.opacity = 1.0;
    }, 2000);
};

async function startGame() {

    //alter game started boolean
    gameStarted = true;
    
    //begin showing obsts
    repeatingObstMover();

    //begin incrementing diff
    setTimeout(() => {
        increaseDifficulty();
    }, 5000);
    
    //add the event listener for pressing space and having the bird jump
    setTimeout(() => {
        window.addEventListener('click', function jump() {birdJump()});
        //jump once to make gravity activate
        birdJump();
    }, 100);

    //render the bird and start it not at the bottom
    const bird:any = document.getElementById('bird');
    bird.style.bottom = '45%';
    bird.style.left = '1%';
    bird.style.opacity = 1.0;

    //render all obsts
    document.querySelectorAll('.obst').forEach((obst:any) => {
        obst.style.left = '100%';
    });

    //begin checking for losses
    setTimeout(() => {
        lossChecker();
    }, 500);
};

class FlappyBird extends Component {

    render() {
        return (
            <React.Fragment>

                <div id="gameOverScreen">
                    <button type="button" onClick={function() {
                        document.body.style.opacity = '0.0';
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }}
                     style={{visibility: 'hidden', transitionProperty: 'opacity', transitionDuration: '1s', opacity: '0.0'}} id="restartButton">
                        <h1 id="gameOverText" style={{color: 'red', marginTop: '30%'}}>
                        </h1>
                    </button>
                </div>
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
                        Click here to begin
                    </p>
                </button>

                <div className="contentSection"></div>

                <h2>
                    Yes, the system to check if you hit an obstacle is buggy <br/>No, I don't care to fix it
                </h2>

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