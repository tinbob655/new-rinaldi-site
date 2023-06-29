import React, {Component} from 'react';
import { isMobile } from '../../..';
import appFile from '../../../app/app.apk';

//reset the current game when the games page is left (also when site is loaded)
if (sessionStorage.getItem('currentPage') == 'home') {
    sessionStorage.setItem('currentGame', 'games');
};

class Home extends Component {

    state = {
        texts: [
            `Links to our music on almost every streaming service on earth. You name it: Spotify, Apple
            Music, Instagram, Facebook, TikTok, Resso, Luna, YouTube Music, YouTube, Amazon Music, Twitch
            Soundtrack, Pandora, Deezer, Tidal, iHeartRaio, ClaroMusica, Saavn, Boomplay, Anghami, KKBox
            NetEase, Tencent, Qobuz, Triller, Joox, Kuack Media, Yandex Music, Adaptr and Flo. How's that
            for spreading the brand?`,

            `Not responcible for any death caused from wearing merch.`,

            `NewRinaldi now has stocks! Very valuable (we almost broke even once). Plz buy some so we can get a 
            new toothbrush.`,

            `You want example music? We've got example music right bloody here.`,
        ],
    };

    render() {
        //desktop home page
        if (isMobile() == false) {
            return (
                <React.Fragment>
                    <table>
                        <thead>
                            <tr>
                                {this.getTexts()}
                            </tr>
                        </thead>
                    </table>
                </React.Fragment>
            );
        }

        //mobile home page
        else {
            return (
                <React.Fragment>
                    <h1>
                        NewRinaldi Official Site
                    </h1>
                    <p>
                        Oi, its NewRinaldi innit, we got merch, media, music, money and more
                    </p>

                    <div className="contentSection"></div>
                    <h2>

                        We got app, big app, good app
                    </h2>
                    <h3 style={{color: 'yellow'}}>
                        <a href={appFile} download="NewRinaldiApp.apk">
                            That's right, an app. Games included. Tap here to download (12% chance not a virus)
                        </a>
                    </h3>

                    <div className="contentSection"></div>
                </React.Fragment>
            )
        }
    };

    getTexts() {
        setTimeout(() => {

            document.getElementById('content').style.marginTop = '50px';
        }, 150);
        let textHTML = [];

        this.state.texts.forEach(text => {
            textHTML.push(<td><p>{text}</p></td>);
        });

        return textHTML;
    };
};

export default Home;