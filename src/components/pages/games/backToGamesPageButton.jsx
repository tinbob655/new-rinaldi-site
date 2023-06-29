import React, {Component} from 'react';
import { changeGame } from './games.jsx';

class BackToGamesPageButton extends Component {

    render() {
        return (
            <button type="button" onClick={function() {changeGame('games')}}>
                <h3>
                    Back to games page
                </h3>
            </button>
        );
    };
};

export default BackToGamesPageButton;