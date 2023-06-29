import React, {Component} from 'react';
import {changePage} from '../index.js';
import { isMobile } from '../index.js';
import '../hamburgerButton.css';

class Header extends Component {
    
    state = {
        styles: {
            desktopHeaderStyle: {
                position: 'fixed',
                top: 0,
                left: 0,
                borderTop: '5px solid #232324 !important',
                zIndex: 99,
                width: '100%',
            },
        },
    };

    render() {
        //regular header
        if (sessionStorage.getItem('currentPage') != 'games') {
            return this.getMainHeader();
        }
        //games pages header
        else if (sessionStorage.getItem('currentGame') == 'games' | null | undefined) {
            return (
                <h1>
                    NewRinaldi got games!
                </h1>
            );
        };
    };

    getMainHeader() {
        //desktop header
        if (isMobile() == false) {
            return (
                <div style={this.state.styles.desktopHeaderStyle}>
                    <table>
                        <thead>
                            <tr>
                                {this.getDesktopHeaderHTML()}
                            </tr>
                        </thead>
                    </table>
                </div>
            );
        }

        //mobile header
        else {
            return (
                <React.Fragment>
                    <div style={{position: 'fixed', top: 10, left: 0,}}>
                        <div>
                            <button class="hamburger hamburger--elastic" type="button" id="hamburger" onClick={function() {
                                document.getElementById('hamburger').classList.toggle('is-active');
                                document.getElementById('mobileHeader').classList.toggle('open');
                            }}>
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                        <div id="mobileHeader" className="hiddenScroll">
                            {this.getMobileHeaderHTML()}
                        </div>
                    </div>
                </React.Fragment>
            );
        };
    };

    getMobileHeaderHTML() {
        const texts = [
            `NewRinaldi's main page`,

            `Links to our music on almost every streaming service on earth. You name it: Spotify, Apple
            Music, Instagram, Facebook, TikTok, Resso, Luna, YouTube Music, YouTube, Amazon Music, Twitch
            Soundtrack, Pandora, Deezer, Tidal, iHeartRaio, ClaroMusica, Saavn, Boomplay, Anghami, KKBox
            NetEase, Tencent, Qobuz, Triller, Joox, Kuack Media, Yandex Music, Adaptr and Flo. How's that
            for spreading the brand?`,

            `Not responcible for any death caused from wearing merch.`,

            `NewRinaldi now has stocks! Very valuable (we almost broke even once). Plz buy some so we can get a 
            new toothbrush.`,

            `You want example music? We've got example music right bloody here.`,
        ];

        const pages = ['Home', 'Media', 'Merch', 'Money', 'Music'];

        let headerHTML = [<div className="contentSection"></div>];

        for (let i = 0; i < pages.length; i++) {
            if (pages[i].toLowerCase() != sessionStorage.getItem('currentPage')) {
                headerHTML.push(
                    <React.Fragment>
                        <button type="button"
                         onClick={function() {changePage(pages[i].toLowerCase())}}>
                            <h2>
                                {pages[i]}
                            </h2>
                            <p style={{fontSize: '20px'}}>
                                {texts[i]} 
                                <br/><br/><br/><br/>
                            </p>
                        </button>
                        <div className="contentSection"></div>
                    </React.Fragment>
                );
            };
        };

        return headerHTML;
    };

    getDesktopHeaderHTML() {
        const pages = ['Home', 'Media', 'Merch', 'Money', 'Music'];

        //get the HTML
        var headerHTML = [];
        pages.forEach((page) => {
            if (page.toLowerCase() != sessionStorage.getItem('currentPage')) {
                headerHTML.push(<td className="headerCell" id={"headerCell" + page}>
                    <button type="button" style={{height: '100%'}} onClick={function() {changePage(page.toLowerCase());}} >
                        <h2 style={page.toLowerCase() == 'home' ? {color: 'yellow'} : {}}>
                            {page}
                        </h2>
                    </button>
                </td>);
            };
        });
        return headerHTML;
    };
};

export default Header;