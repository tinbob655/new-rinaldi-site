import React, {Component} from 'react';
import './tRexRunStyles.scss';

var obstNo:number = 0;
var difficultyMod:number = 0;
var gameStarted:boolean = false;
var score:number = 0;

function delay(millisec:number) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    });
};

function rexJump() {
    const rex:any = document.getElementById('rex');
    rex.style.transitionProperty = 'unset';
    rex.classList.add('jumping');
    
    //allow the player to click to hover
    document.removeEventListener('click', rexJump);
    document.addEventListener('click', rexHover);
    setTimeout(() => {
        rex.classList.remove('jumping');

        //restore the click event listener to being a jump
        document.removeEventListener('click', rexHover);
        document.addEventListener('click', rexJump);
    }, 601);
};

async function increaseScore() {
    score++;

    const scoreCounter:any = document.getElementById('scoreCounter');
    scoreCounter.innerText = 'Score: '+score;

    if (gameStarted == true) {
        await delay(100);
        increaseScore();
    };

    return;
}

async function rexHover() {
    const rex:any = document.getElementById('rex');

    //elevate the rex using scss animation
    rex.classList.add('hovering');

    await delay(1001);

    rex.classList.remove('hovering');
};

async function moveObst() {

    //first, work out which obst to move
    const numberOfObsts:number = document.querySelectorAll('.obst').length;
    const obst:any = document.getElementById('obst'+obstNo % numberOfObsts);

    //now, move the obst in question
    obst.classList.add('moving');
    setTimeout(() => {
        obst.classList.remove('moving');
    }, difficultyMod * 2000);

    //increment the obst no for the next repeat
    obstNo++;

    //repeat after a delay so long as the game is still active
    if (gameStarted == true) {

        //calculate a delay which is slightly randomised
        let randomDelayOffset:number = Math.floor(Math.random() * 5000);
        let maximumObstDelay:number = 2000;
        let obstDelay:number = maximumObstDelay - (difficultyMod * 500) + randomDelayOffset - 1000;
        //set a minimum delay of 100 ms
        obstDelay < 100 ? obstDelay = 100 : void
        await delay(obstDelay);
        moveObst();
        return;
    };

};

async function increaseDifficulty() {
    //increase the difficulty modifier
    difficultyMod < 10 ? difficultyMod++ : difficultyMod = 10;

    //increase the speed of all moving obsts
    document.querySelectorAll('.obst').forEach((obst:any) => {
        obst.style.animationDuration = 2 - (difficultyMod * 0.19);
    });

    //increase the difficulty every 5 seconds so long as the game is active
    if (gameStarted == true) {
        await delay(5000);
        increaseDifficulty();
        return;
    }
};

async function checkForLoss() {

    const rex:any = document.getElementById('rex');
    
    //get the bottom of the rex and obsts
    let rexBottom:number = rex.getBoundingClientRect().bottom;
    let obstsBottom:number = Number(document.getElementById('obst0')?.getBoundingClientRect().bottom);

    //check if the rex is in range of the obsts
    if (rexBottom > (obstsBottom - 50)) {

        //the rex's y coordinate was valid for collisions, get the data to check the x coords
        let rexLeft:number = rex.getBoundingClientRect().left;
        let collisionRange:number = 50;

        //check coords for each obst
        document.querySelectorAll('.obst').forEach((obst:any) => {

            //get the x coord of the current obst for checking
            let obstLeft:number = obst.getBoundingClientRect().left;

            //check the coords
            if ((rexLeft - collisionRange) <= obstLeft && (rexLeft + collisionRange) >= obstLeft) {
                gameOver();
                return;
            };
        });
    };

    //repeat after a delay
    await delay(200);
    checkForLoss();
    return;
}

function gameOver() {
    gameStarted = false;

    const gameOverText:any = document.getElementById('gameOverScoreCounter');
    gameOverText.innerText = '(Score: '+score+')';
    document.getElementById('gameOverScreen')?.classList.add('shown');

    //save the score in case of a play again
    sessionStorage.setItem('tRexHighScore', String(score));
};

function startGame() {
    gameStarted = true;

    //begin increasing the difficulty (this MUST happen first as base difficulty is 0)
    increaseDifficulty();

    //allow the rex to jump
    setTimeout(() => {
        document.addEventListener('click', rexJump);
    }, 100);

    //start moving obsts
    moveObst();

    //begin checking for losses
    setTimeout(() => {
        checkForLoss();
    }, 50);

    //alter the frontend of the start button and disable it
    const startButton:any = document.getElementById('startButton');
    startButton.classList.add('clicked');

    //alter the frontend of the score counter
    const scoreCounter:any = document.getElementById('scoreCounter');
    scoreCounter.style.transform = 'scale(0, 0)';
    setTimeout(() => {
        //begin increasing score
        increaseScore();
        scoreCounter.style.transform = 'scale(1, 1)';
    }, 501);
};

class TRexRun extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="gameOverScreen">
                    <button type="button" onClick={function() {window.location.reload()}}>
                        <h1 style={{color: 'red', marginTop: '20vh'}}>
                            Thank god u lost, that has made me rlllly happy <br/><br/>
                            Click here to try again (you'll prob get worse tho tbh)
                        </h1>
                        <p id="gameOverScoreCounter" style={{color: 'red'}}>
                        </p>
                    </button>
                </div>
                <h1>
                    NewRinaldi Brings To You: T-Rex Run
                </h1>

                <button type="button" onClick={function() {startGame()}} id="startButton">
                    <h2>
                        Click here to begin
                    </h2>
                </button>

                <table>
                    <thead>
                        <tr>
                            <td>
                                <h2 style={{color: 'yellow'}}>
                                    {sessionStorage.getItem('tRexHighScore') != null ? 'High Score: '+sessionStorage.getItem('tRexHighScore') : ''}
                                </h2>
                            </td>
                            <td>
                                <p id="scoreCounter">
                                    {/*NOTE: this is the started text which gets replaced by the score counter when the game starts*/}
                                    Click once to jump, click again whilst in midair to hover for a second
                                </p>
                            </td>
                        </tr>
                    </thead>
                </table>



                <div id="gameBoard">
                    <div id="rex"></div>
                    {this.getAllObsts()}
                </div>
            </React.Fragment>
        );
    };

    getAllObsts() {
        let obstHTML:Array<any> = [<React.Fragment></React.Fragment>];

        //repeat for 100 obsts
        for (let obstNo = 0; obstNo < 100; obstNo++) {
            obstHTML.push (
                <div className="obst" id={"obst"+obstNo}></div>
            );
        };

        return obstHTML
    };
};

export default TRexRun;