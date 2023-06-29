import React, {Component} from 'react';
import Home from './pages/home/home.jsx';
import Media from './pages/media/media.jsx';
import Merch from './pages/merch/merch.jsx';
import Money from './pages/money/money.jsx';
import Music from './pages/music/music.jsx';
import Games from './pages/games/games.jsx';
import SheetMusic from './pages/sheetMusic/sheetMusic.jsx';

class Content extends Component {

    render() {
        return (
            <React.Fragment>
                {this.getContent()}
            </React.Fragment>
        );
    };

    getContent() {
        const allPages = {
            home: <Home/>,
            media: <Media/>,
            merch: <Merch/>,
            money: <Money/>,
            music: <Music/>,
            games: <Games/>,
            sheetMusic: <SheetMusic/>,
        };

        return allPages[sessionStorage.getItem('currentPage')];
    };
};

export default Content;