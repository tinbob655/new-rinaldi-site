import React, {Component} from 'react';
import { changePage } from '../../..';

class Media extends Component {

    state = {
        services: ['spotify', 'itunes', 'deezer', 'youtube', 'amazon'],

        links: {
            spotify: 'https://open.spotify.com/embed/artist/1dBbc3XltRauSX0dRpRUE6?utm_source=generator',
            itunes: 'https://embed.music.apple.com/gb/album/weasel-poppers/1653360332',
            deezer: 'https://widget.deezer.com/widget/dark/album/374522487',
            youtube: 'https://www.youtube.com/embed/hFmhwKAwFRM',
            amazon: 'https://music.amazon.co.uk/embed/B0BKX1XHTJ/?id=rz1u2YcBjF&marketplaceId=A1F83G8C2ARO7P&musicTerritory=GB',
        },

        titles: {
            spotify: 'Spotify innit:',
            itunes: "We're on ITunes for all you Apple freaks:",
            deezer: "Haha, DEEZ...tracks are very good:",
            youtube: 'YouTube, well not specifically you but generally people tend to tube. Usually some NewRinaldi:',
            amazon: "We're doin the thing on amazon moosik:",
        },
    }

    render() {
        return (
            <React.Fragment>
                <h1>
                    I'm not going to say the sheer number of services we upload to because I don't want to be
                    here all day. <br/> Here are a crap ton of links to half the music softwares
                    on the goddam planet.
                </h1>

                <div className="contentSection"></div>

                <button type="button" onClick={function() {changePage('sheetMusic')}}>
                    <h3 style={{color: 'yellow', fontSize: '35px'}}>
                        NewRinaldi original sheet music, right past this link!
                    </h3>
                </button>

                <div className="contentSection"></div>

                <div>
                    {this.getIframes()}
                </div>

                <div id="contentSection"></div>

                <h2>
                    And that's not all
                </h2>
                <button type="button" onClick={function() {changePage('downloads')}}>
                    <h3>
                        Some people are selfish, impatient and cheap. If that sounds like you, then get free NewRinaldi
                        audio downloads right past <h3 style={{display: 'inline', textDecoration: 'underline', fontWeight: 900, color: '##afd1a8'}}>
                            This link
                        </h3>
                    </h3>
                </button>

                <div className="contentSection"></div>
            </React.Fragment>
        );
    };

    getIframes() {
        let iframeHTML = [];

        this.state.services.forEach(service => {
            iframeHTML.push (
                <React.Fragment>
                    <p>
                        {this.state.titles[service]}
                    </p>
                    <iframe src={this.state.links[service]} title={"NewRinaldi on "+service} loading="lazy"
                    allow={`encrypted-media *; fullscreen *; clipboard-write; accelerometer; autoplay; gyroscope; picture-in-picture;
                    web-share`} style={{height: service == 'itunes' ? '350px' : ''}}></iframe>
                    <div className="contentSection"></div>
                </React.Fragment>
            );
        });
        return iframeHTML;
    };
};

export default Media;