import React, {Component} from 'react';
import './colourMatchStyles.scss';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

var moves:number = 0;
var gradientColours:Array<string> = [];
var cellMode:String = 'select';

function loadBoard() {

    //get the gradient
    function getGradient() {

    //work out the random start and end point
    let start = [(Math.floor(Math.random() * 255)), (Math.floor(Math.random() * 255)), Math.floor(Math.random() * 255)];
    let end = [255-start[0], 255-start[1], 255-start[2]];
    let colours:Array<string> = [];
    
    //first work out the distance change required by each colour
    let distances:Array<number> = [];
    for (let i = 0; i < 3; i++) {
        distances[i] = Math.trunc((start[i] - end[i]) / 25);
    };

    //now use the distance required to create a list of codes
    for (let i = 0; i < 25; i++) {
        let red:number = start[0] - (distances[0]*i);
        let green:number = start[1] - (distances[1]*i);
        let blue:number = start[2] - (distances[2]*i);
        colours.push(String(red)+', '+String(green)+', '+String(blue));
    };

    return colours;
    };

    gradientColours = getGradient(); //start[] end[]

    //now randomise the gradient colours
    let randomColours:Array<string> = [];
    //a temp array is used to preserve gradient colours for use later (in win check func)
    let tempGradientColours:any = [];
    gradientColours.forEach((value) => {tempGradientColours.push(value)});

    while (randomColours.length <= 24) {
        let rand = Math.floor(Math.random() * tempGradientColours.length);
        if (tempGradientColours[rand] != undefined) {
            randomColours.push(tempGradientColours[rand]);
            tempGradientColours[rand] = undefined;
        };
    };

    let boardHTML = '';
    boardHTML += '<table style="table-layout: fixed; height: 100%; width: 100%;"><thead>';

    //get the HTML string to load
    for (let i = 0; i < 25; i++) {

        //get a random colour for the cell
        let color = randomColours[i];
        boardHTML += `<tr><td><div class="colourMatchCell hidden" id="cell`+i+`" style="background-color: rgb(`+color+`);"></div></td></tr>`;
    };
    boardHTML += '</thead></table>';

    //now apply the HTML string
    return boardHTML;
};

function startGame() {
    //play audio
    const audio:any = document.getElementById('audio');
    const storage = getStorage();
    getDownloadURL(ref(storage, 'Music/Start Your Engines.mp3'))
        .then((url) => {
            audio.src = url;
            audio.play();
        });

    const board:any = document.getElementById('gameBoard');
    board.innerHTML = loadBoard();
    
    //frontend
    //show all of the cells
    const allCells = document.querySelectorAll('.colourMatchCell');
    allCells.forEach((cell) => {
        cell.classList.remove('hidden');
    });
    //render the moves counter
    const movesCounter:any = document.getElementById('movesCounter');
    movesCounter.innerText = 'You have: '+(50-moves)+' moves left!';
    movesCounter.classList.remove('hidden');
    //remove the start button
    const startButton:any = document.getElementById('startButton');
    startButton.classList.add('hidden');
    //change the borders of the main div to show the user what each end's colours should be
    const mainDiv:any = document.getElementById('gameBoard');
    mainDiv.style.borderTop = '5px double rgb('+gradientColours[0]+')';
    mainDiv.style.borderBottom = '5px double rgb('+gradientColours[gradientColours.length-1]+')';

    //change the onclick of all cells to be swap or select
    changeAllCellsOnClick(function() {
        if (cellMode == 'select') {

            //if the cell is the first of the two cells to be swapped
            cellMode = 'swap';
            //frontend
            this.style.transform = 'scale(1.05, 1.5)';
            setTimeout(() => {
                this.classList.add('enlarged');
            }, 501)
        } 

        else if (cellMode == 'swap') {

            //make sure the same cell cannot be clicked twice in a row
            if (this.classList.contains('enlarged') == false) {

                //if the cell is the second of the two cels to be swaped
                cellMode = 'select';
    
                //work out the other cell for swapping with
                let firstCell:any = document.querySelector('.enlarged');
    
                //frontend
                document.querySelectorAll('.enlarged').forEach((cell:any) => {
                    cell.classList.remove('enlarged');
                    cell.style.transform = 'scale(1, 1)';
                });
    
                //swap the two squares which were selected
                //make each cell invisible
                this.style.opacity = 0.0;
                firstCell.style.opacity = 0.0;
                setTimeout(() => {
                    //once the animation for opacity 0 is done, swap the two background colours
                    let thisBackgroundColor = this.style.backgroundColor;
                    this.style.backgroundColor = firstCell.style.backgroundColor;
                    firstCell.style.backgroundColor = thisBackgroundColor;
    
                     //check if the player has won
                    if (checkWin() == true) {
                        return null;
                    };
                    //check if the player has lost
                    moves++
                    if (moves >= 50) {
                        //if the player has lost, end the game
                        endGame(false);
                    } else {
                        //frontend
                        const movesCounter:any = document.getElementById('movesCounter');
                        movesCounter.classList.add('hidden');
                        setTimeout(() => {
                            
                            //change moves counter
                            if (moves != 49) {
                                movesCounter.innerText = 'You have: '+(50-moves)+' moves left';
                            } else {
                                movesCounter.innerText = 'You have: '+(50-moves)+' move left';
                            };
                            setTimeout(() => {
                                movesCounter.classList.remove('hidden');
                            }, 10);
                        }, 751);
                    };
                    setTimeout(() => {
                        //after the background colours have been swapped, make the cells shown once again
                        this.style.opacity = 1.0;
                        firstCell.style.opacity = 1.0;
                    }, 10);
                }, 501);
            };
        };
    });
};

function changeAllCellsOnClick(func:any) {
    const allCells:NodeList = document.querySelectorAll('.colourMatchCell');
    allCells.forEach((cell) => {
        cell.addEventListener('click', func);
    });
};

function checkWin() {
    let win = true;
    document.querySelectorAll('.colourMatchCell').forEach((cell:any) => {
        let bgcolor = cell.style.backgroundColor;
        bgcolor = bgcolor.split('(').pop().replace(')', '');
        gradientColours[cell.id.replace('cell', '')] == bgcolor ? win = win : win = false;
    });

    if (win == true) {
        endGame(true);
        return true;
    };
};

function endGame(win:boolean) {
    const endGameScreen:any = document.getElementById('endScreen');
    const endText:any = document.getElementById('endText');
    if (win == false) {
        endText.innerText = 'Ur literally colourblind lol\n\nClick here to try again!';
        endText.style.color = 'red';
    }
    else if (win == true) {
        endText.innerText = "You won? That shouldn't have happened, must be a bug?\n\nClick here to go again";
        endText.style.color = '#4cc530';
    };
    setTimeout(() => {
        endGameScreen.classList.remove('hidden');
    }, 10);
};

class ColourMatch extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="endScreen" className="hidden">
                    <button type="button" style={{marginTop: '40vh'}} onClick={function() {window.location.reload()}}>
                        <h1 id="endText">
                        </h1>
                    </button>
                </div>
                <h1>
                    NewRinaldi Colur Match Game Thing Innit
                </h1>
                <button onClick={function() {startGame()}} type="button" id="startButton">
                    <h2>
                        Click here to start the game!
                    </h2>
                </button>
                <p id="gameInstructions">
                    Click a square and then another to swap them, the aim is to make a perfect gradient from top to bottom in 
                    line with the coloured edges of the board!
                </p>
                <h2 id="movesCounter" className="hidden">
                    You have: Moves left!
                </h2>
                <div id="gameBoard">
                </div>
            </React.Fragment>
        );
    };

};

export default ColourMatch;