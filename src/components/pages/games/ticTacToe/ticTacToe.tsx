import React, {Component} from 'react';
import "./ticTacToeStyles.scss";
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

var allCellContent:string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
let playerTurn:number = 0;

if (sessionStorage.getItem('currentGame') == 'ticTacToe') {
    //play audio
    const audio:any = document.getElementById('audioLoop');
    const storage = getStorage();
    getDownloadURL(ref(storage, 'Music/takeoff.mp3'))
        .then((url) => {
            audio.src = url;
            audio.play();
        });
};

function cellClicked(cellNo:number) {
    //define cell and cell content (td and span)
    const cellContent:any = document.getElementById('cellContent'+cellNo);
    const cell:any = document.getElementById('cell'+cellNo);
    //update the onclick and the classes for the clicked cell
    cell.onclick = null;
    cell.classList.remove('empty');
    let xOrO = (playerTurn%2 == 0)? 'X' : 'O';
    cellContent.classList.add(xOrO);
    //add X or O to the clicked cel
    cellContent.innerText = xOrO;
    //invert the turn variable, log the new cell content and render the new cell content
    playerTurn++;
    allCellContent[cellNo] = xOrO;
    cellContent.style.opacity = 1.0;
    //check if anyone has won the game
    checkWin(xOrO); 
};

function checkWin(winner:string) {   
    
    
    function win(winner:string) {
        //game ending and win sequence
        const cover: any = document.getElementById('cover');
        var coverHTML:string = '';
        if (winner != 'Draw') {
            var textColor = winner == 'X' ? '#d0d334' : '#1b2ab3';
            coverHTML = `<h1 style="color: `+textColor+`;">`+winner.toUpperCase()+`s HAVE WON!<br/><br/><br/></h1>`;
        }
        else {
            var textColor = 'orange'
            coverHTML = `<h1 style="color: `+textColor+`;"> DRAW</h1>`
        };
        coverHTML += `<button onclick="
        document.body.style.opacity = 0.0;
        setTimeout(() => {
            window.location.reload()
        }, 1001);" type="button"><p style="color: `+textColor+`;">Play again?</p></button>`;
        cover.classList.add('shown');
        cover.innerHTML = coverHTML;
    };


    //check for horizontal victory
    for (let i = 0; i < 8; i = i+3) {
        if (allCellContent[i] == allCellContent[i+1] && allCellContent[i] == allCellContent[i+2]) {
            win(winner);
        }
    }
    //check for vertical victory
    for (let i = 0; i < 3; i++) {
        if (allCellContent[i] == allCellContent[i+3] && allCellContent[i] == allCellContent[i+6]) {
            win(winner);
        }
    }
    //check for diagonal victory
    if ((allCellContent[0] == allCellContent[4] && allCellContent[0] == allCellContent[8]) ||
    (allCellContent[2] == allCellContent[4] && allCellContent[2] == allCellContent[6])) {
        win(winner);
    }
    //check for draw
    else if (playerTurn >= 9) {
        win('Draw');
    };
};

class TicTacToe extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="cover">
                </div>
                <h1>
                    NewRinaldi brings to you: Tic tac toe!
                </h1>
                <div id="ticTacToeBoard">
                    <table style={{tableLayout: 'fixed', width: '30vw', height: '30vw'}}>
                        <thead dangerouslySetInnerHTML={{__html: this.getTicTacToeBoard()}}>
                        </thead>
                    </table>
                </div>
                <div className="contentLine"></div>
            </React.Fragment>
        );
    };

    getTicTacToeBoard() {
        let ticTacToeHTML = '';
        let currentCell:number = 0;
        for (let row = 0; row < 3; row++) {
            ticTacToeHTML += `<tr>`
            for (let collum = 0; collum < 3; collum++) {
                currentCell = (row*3)+collum;
                ticTacToeHTML+= `<td class="ticTacToeCell empty" id="cell`+currentCell+`">
                    <span id="cellContent`+currentCell+`" class="cellContent">
                    </span>
                </td>
                `;
            };
            ticTacToeHTML += `</tr>`
        };
        return ticTacToeHTML;
    };
};

//only load if the current game is tic tac toe
if (sessionStorage.getItem('currentGame') == 'ticTacToe') {
    setTimeout(() => {
        for (let i = 0; i < 9; i++) {
            let cell:any = document.getElementById('cell'+i);
            cell.onclick = function() {cellClicked(i)};
        };
    }, 1000);
}

export default TicTacToe;