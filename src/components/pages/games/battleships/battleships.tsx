import React, {Component} from 'react';
import './battleshipsStyles.scss';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

var lives:number = 30;
var shipsSunk:number = 0;

function startGame() {

    //place the computer's ships
    placeComputerShips();

    //frontend
    changeGameText('Guess a computer ship location');
    const squares:NodeList = document.querySelectorAll('.gridSquare');
    squares.forEach((square:any) => {
        square.classList.add('shown');
    });
    document.getElementById('startButton')?.classList.add('hidden');
    //audio
    const audio:any = document.getElementById('audioLoop');
    const storage = getStorage();
    getDownloadURL(ref(storage, 'Music/TwitchingAroundV2.mp3'))
        .then((url) => {
            audio.src = url;
            audio.play();
        });

    //change the onclick of the squares to be a guess
    changeGridSquaresOnClick(function battleshipsSquareClicked() {

        //frontend
        this.classList.remove('hoverAllowed');
        this.removeEventListener('click', battleshipsSquareClicked);
        
        //check if the user's guess was correct and thus the computer's ship was hit
        if (this.classList.contains('compSquare')) {

            //if the guess was correct, alter the frontend and check if an entire ship has been sunk
            this.classList.add('hit');
            //check if an entire ship has been sunk
            checkShipSunk(this.id.replace('square', ''));
        }
        else {

            //if the user missed the computer's ships
            //check for a loss
            lives--;
            if (lives <=0) {

                //if the user lost
                gameOver('Haha you managed to loose to a literal inanimate object\n\nTap here to try again', 'red');
                setTimeout(() => {
                    document.getElementById('gameOverScreen')?.classList.add('shown');
                }, 20);
            }
            else {

                //if the user has not lost yet
                changeGameText('You missed! You have '+lives+' lives left');
                this.classList.add('miss');
            };
        };
    });
};

function placeComputerShips() {
    let shipTypes = ['Carrier', 'Battleship', 'Cruiser', 'Destroyer', 'Sub'];

    function checkValidCoord(coord:number) {

        //check if each INDIVIDUAL square in ONE ship will go off the end (top, right, bottom, left)
        if (coord < 0 || (coord+1)%12 == 0 || coord > 143 || coord%12 == 0) {

            //if the square will go off the end
            return false
        };

        //if it won't go off the end, check if it will collide with another computer ship
        let directions:Array<number> = [1, -1, 12, -12];
        for (let i:number = 0; i < directions.length; i++) {
            if (document.getElementById('square'+(coord+directions[i]))?.classList.contains('compSquare')) {
                return false;
            };
        };

        //if the square was valid and passed all tests
        return true;
    };

    //this will do ONE ship
    function getOneShip(length:number, shipType:string) {
        let oneShip:Array<number> = [];

        //choose a random starter square
        do {
            var randomStarterCoord:number = Math.floor(Math.random() * 144);
        } while (document.getElementById('square'+randomStarterCoord)?.classList.contains('compSquare') == true);

        //choose a random direction
        let allDirections:Array<number> = [1, -1, 12, -12];
        let randomDirection = allDirections[Math.floor(Math.random() * 4)];

        //check if the ENTIRE ONE ship will be valid
        for (let i:number = 0; i < length; i++) {
            let edge = randomStarterCoord + (randomDirection*i);

            //if the ship was location was not valid
            if (checkValidCoord(edge) == false) {
                getOneShip(length, shipType);
                return null;
            }

            //if the cell location was valid
            else {
                oneShip.push(edge);
            };
        };

        //if the ENTIRE ship was valid, add it to the game
        if (oneShip.length > 1) {
            oneShip.forEach((location) => {
                document.getElementById('square'+location)?.classList.add('compSquare');
                document.getElementById('square'+location)?.classList.add(shipType);
            });
        };
    };

    //now load all the ships
    let shipLengths = [6, 5, 4, 3, 2];
    shipLengths.forEach((ship:number) => {
        getOneShip(ship, shipTypes[shipLengths.indexOf(ship)]);
    });
};

function checkShipSunk(shipNo:number) {
    let shipTypeLengths = {
        Carrier: 6,
        Battleship: 5,
        Cruiser: 4,
        Destroyer: 3,
        Sub: 2,
    };

    //check if an entire ship has been sunk
    let shipType:any = document.getElementById('square'+shipNo)?.classList[2];
    let allShipsOfType:NodeList = document.querySelectorAll('.hit.'+shipType);

    if (allShipsOfType.length >= shipTypeLengths[shipType]) {

        //if the ship has been sunk
        //frontend
        changeGameText("You sunk the computer's "+shipType+"!");
        allShipsOfType.forEach((square:any) => {
            square.classList.add('sunk');
        });

        //if the player has won
        shipsSunk++;
        if (shipsSunk >= 5) {
            //frontend
            gameOver("You won (somehow) \n\nClick here to go again!", '#4cc530');
        };
    }
    else {
        //if the ship has not been sunk
        changeGameText("You hit the computer's ship!")
        document.getElementById('square'+shipNo)?.classList.add('hit');
    }
};

function changeGridSquaresOnClick(script:Function) {
    const allSquares:any = document.querySelectorAll('.gridSquare');
    allSquares.forEach((square:any) => {
        square.addEventListener('click', script);
    });
}

function changeGameText(text:String) {
    const gameText:any = document.getElementById('gameInfo');
    gameText.classList.add('hidden');
    setTimeout(() => {
        gameText.innerText = text;
        gameText.classList.remove('hidden');
    }, 751);
};

function gameOver(message:string, colour:string) {
    const gameOverText:any = document.getElementById('endScreenText');
    gameOverText.innerText = message;
    gameOverText.style.color = colour;
    setTimeout(() => {
        document.getElementById('gameOverScreen')?.classList.add('shown');
    }, 25);
    changeGridSquaresOnClick(function() {console.log(message)});
};

class Battleships extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="gameOverScreen">
                    <button type="button" onClick={function() {window.location.reload()}}>
                        <h1 id="endScreenText">
                        </h1>
                    </button>
                </div>

                <h1>
                    NewRinaldi brings to you: Battleships
                </h1>

                <button type="button" onClick={startGame} id="startButton">
                    <p>
                        Tap here to start the game!
                    </p>
                </button>

                <h2 id="gameInfo">
                </h2>

                <div id="mainBoard" dangerouslySetInnerHTML={{__html: this.drawGrid()}}>
                </div>
            </React.Fragment>
        );
    };

    //function to draw the grid
    drawGrid() {
        let gridHTML:any = '';
        gridHTML += (`<table style="table-layout: fixed; width:100%; height: 100%;"><thead>`);

        //add each cell
        for (let row = 0; row < 12; row++) {
            gridHTML += ('<tr>');
            for (let column = 0; column < 12; column++) {
                let squareNo = (row*12) + column;
                gridHTML += (`<td><div class="gridSquare hoverAllowed" id="square`+squareNo+`"></div></td>`);
            };
            gridHTML += (`</tr>`);
        };
        gridHTML += (`</thead></table>`);

        //add the event listeners
        return gridHTML;
    };
};

export default Battleships;