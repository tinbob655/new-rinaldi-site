import React, {Component} from 'react';
import './pongStyles.scss';

function startGame() {
    //start game
};

class Pong extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>
                    NewRinaldi brings to you: Pong
                </h1>

                <button type="button" onClick={function() {startGame()}}>
                    <h2>
                         Click here to start
                    </h2>
                </button>

                <div id="gameBoard">
                    <div id="leftBat"></div>
                    <div id="ball"></div>
                    <div id="rightBat"></div>
                </div>
            </React.Fragment>
        );
    };
};

export default Pong;