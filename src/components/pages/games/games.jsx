import React, {Component} from 'react';
import { changePage } from '../../..';
//import game pages
import WackAMole from './wackAMole/wackAMole.tsx';
import Battleships from './battleships/battleships.tsx';
import ColourMatch from './colourMatch/colourMatch.tsx';
import TicTacToe from './ticTacToe/ticTacToe.tsx';
import FlappyBird from './flappyBird/flappyBird.tsx';
import TRexRun from './tRexRun/tRexRun.tsx';
import Pong from './pong/pong.tsx';
import BackToGamesPageButton from './backToGamesPageButton.jsx';
//import game cover images
import wackAMoleCover from './gameCovers/wackAMoleCover.png';
import colourMatchCover from './gameCovers/colourMatchCover.png';
import ticTacToeCover from './gameCovers/ticTacToeCover.png';
import battleshipsCover from './gameCovers/battleshipsCover.png';
import flappyBirdCover from './gameCovers/flappyBirdCover.png';
import tRexRunCover from './gameCovers/tRexRunCover.png';

export function changeGame(game) {
    //make sure the current games page is not being requested
    if (sessionStorage.getItem('currentGame') != game) {
        sessionStorage.setItem('currentGame', game);
        document.body.style.opacity = 0.0;
        setTimeout(() => {
            window.location.reload();
        }, 501);
    };
};

const gameBackendTitles = ['wackAMole', 'battleships', 'colourMatch', 'ticTacToe', 'flappyBird', 'tRexRun', 'pong'];
const gameTitles = ['Wack a Mole', 'Battleships', 'Colour Match', 'Tic Tac Toe', 'Flappy Bird', 'T-Rex Run', 'Pong'];
const gameImages = [wackAMoleCover, battleshipsCover, colourMatchCover, ticTacToeCover, flappyBirdCover, tRexRunCover, null];

class Games extends Component {

    render() {
        //set the game to games if it has not previusly been set
        if (sessionStorage.getItem('currentGame') == null | undefined) {
            sessionStorage.setItem('currentGame', 'games');
        };


        //return the games home page if the currentGame is games (games home page)
        if (sessionStorage.getItem('currentGame') == 'games') {
            return (
                <React.Fragment>
                    <div className="contentSection"></div>
                    <h2>
                        That's right, we got games. Click any game to get playing
                    </h2>
                    <p>
                        Some games might not work on some browsers, we recommend using chromium browsers or opera for the best games experience
                    </p>
                    <table>
                        <thead>
                            {this.getAllGameLinks()}
                        </thead>
                    </table>
                    
                    <button type="button" onClick={function() {changePage('home')}}>
                        <h3>
                            Back to home page
                        </h3>
                    </button>
                </React.Fragment>
            );
        }

        //if the games page is not games, then load the correct game
        else {
            return (
                <React.Fragment>
                    {this.getGame()}
                    <BackToGamesPageButton/>
                </React.Fragment>
            );
        };

    };

    getGame() {
        const allGames = {
            wackAMole: <WackAMole/>,
            battleships: <Battleships/>,
            colourMatch: <ColourMatch/>,
            ticTacToe: <TicTacToe/>,
            flappyBird: <FlappyBird/>,
            tRexRun: <TRexRun/>,
            pong: <Pong/>,
        };

        return allGames[sessionStorage.getItem('currentGame')];
    };

    getAllGameLinks() {

        function getLinkCell(cellNo) {
            let cellHTML = [];
            cellHTML.push(
                <td style={{border: '5px double #343435', borderRadius: '10px', width: '95%', margin: '0', padding: '0',}}>
                    <button type="button" onClick={function() {changeGame(gameBackendTitles[cellNo])}}>
                        <h3>
                            {gameTitles[cellNo]}
                        </h3>
                        <img src={gameImages[cellNo]} className="centered"
                         style={{height: 'auto', maxHeight: '200px'}} alt="Coming soon!!!"/>
                    </button>
                </td>
            );

            return cellHTML;
        };

        function getLinkRow(rowNo) {
            let rowHTML = [];
            rowHTML.push(
                <tr>
                    {getLinkCell(rowNo * 2)}
                    {getLinkCell((rowNo * 2) + 1)}
                </tr>
            );

            return rowHTML;
        };

        var gameHTML = [];

        //now load the HTML
        for (let row = 0; row < gameBackendTitles.length/2; row++) {
            gameHTML.push(getLinkRow(row));
        };

        return gameHTML;
    };
};

export default Games;