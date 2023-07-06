import React, {Component} from 'react';
//import functions
import {isMobile} from '../../../index.js';
import { changePage } from '../../../index.js';
import { playPauseClicked, muteUnmuteClicked, stopMusic } from './musicPlayerFunctions.js';

class Music extends Component {

    state = {
        trackList: ['startYourEngines', 'mrCoffee', 'bitHavinAFit', 'alexComp1Remix','aroundTwitching', 'theIronDuke', 'christmasPresent', 'greenestGrass',
         'iAmGoingToTakeTheRights', 'twitchingAround','marchOfRansome', 'onwardsAndUpwards', 'R4RTheme', 'skidaddle',
         'summerSun', 'takeoff', 'theLastStand', 'tunsinBopperV2', 'twitchingAroundV2', 'spoons2'],

        tracks: {
            startYourEngines: {
                title: "Start Your Engines",
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FStart%20Your%20Engines%20Cover.jpg?alt=media&token=159b4b11-98cb-429d-8353-0274dab58136',
                time: 0,
                src: 'Music/Start Your Engines.mp3',
            },
            mrCoffee: {
                title: "Mr. Coffee",
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FhugeGuitarCover.jpg?alt=media&token=7779a462-b72b-4a88-a356-fb16b18c8ea9',
                time: 0,
                src: 'Music/MrCoffeeFLAC.flac'
            },
            bitHavinAFit: {
                title: "8-Bit Havin' A Fit",
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',
                time: 0,
                src: "Music/8-bit havin' a fit.mp3",
            },
            alexComp1Remix: {
                title: 'March Of The Soviet Machine V3',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FsovietMachine3Cover.jpg?alt=media&token=7617f186-209d-4535-af1d-b0dcf93f0bee',
                time: 0,
                src: 'Music/MarchOfTheSovietMachineV3.mp3',
            },
            aroundTwitching: {
                title: 'Around Twitching',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FaroundTwitchingCover.png?alt=media&token=31486fb6-1280-4b57-b483-faa912b33008',
                time: 0,
                src: 'Music/Around Twitching.mp3',
            },
            theIronDuke: {
                title: "The Iron Duke",
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FhugeGuitarCover.jpg?alt=media&token=7779a462-b72b-4a88-a356-fb16b18c8ea9',
                time: 0,
                src: 'Music/TheIronDukeFLAC.flac',
            },
            christmasPresent: {
                title: 'Christmas Crunker',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FChristmas%20Crunker.jpg?alt=media&token=32e71a67-8396-47b8-9c61-cbc55118201a',
                time: 0,
                src: 'Music/ChristmasPresent.mp3', 
            },
            greenestGrass: {
                title: 'Greenest Grass',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FBig%20Jungle%20innit.png?alt=media&token=4bdd8dfa-6a5a-4416-8dc5-086cf387ae90',
                time: 0,
                src: 'Music/GreenestGrass.mp3',
            },
            iAmGoingToTakeTheRights: {
                title: 'I am going to take the significant majority of your rights and privellages',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FScare-E%20Toons.jpg?alt=media&token=a5089b8c-46fc-41a9-9148-e19ef7b9c174',
                time: 0,
                src: 'Music/I am going to take away the significant majority of your rights.mp3',
            },
            twitchingAround: {
                title: 'Twitching Around',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',
                time: 0,
                src: 'Music/Twitching Around.mp3',
            },
            marchOfRansome: {
                title: 'March Of Leader Ransome',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FMarch%20of%20leader%20ransome.jpg?alt=media&token=775a222d-131d-4152-aed5-766c1b4de3c1',
                time: 0,
                src: 'Music/MrachOfLeaderRansomeV2.mp3',
            },
            onwardsAndUpwards: {
                title: 'Onwards and Upwards',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FBig%20Jungle%20innit.png?alt=media&token=4bdd8dfa-6a5a-4416-8dc5-086cf387ae90',
                time: 0,
                src: 'Music/OnwardsandUpwards.mp3',
            },
            R4RTheme: {
                title: 'ready4ransome Theme',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FR4R%20image.jpeg?alt=media&token=6f494af0-7eac-4f8b-8c2e-4de688c78775',
                time: 0,
                src: 'Music/R4Rtheme.mp3',
            },
            skidaddle: {
                title: 'Skidaddle',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',
                time: 0,
                src: 'Music/skidaddle.mp3',
            },
            summerSun: {
                title: 'Summer Sun',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FBig%20Jungle%20innit.png?alt=media&token=4bdd8dfa-6a5a-4416-8dc5-086cf387ae90',
                time: 0,
                src: 'Music/SummerSun.mp3',
            },
            takeoff: {
                title: 'Takeoff',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2Ftakeoff.jpg?alt=media&token=455591b1-966b-4f7b-ab5a-05eb9c17d1b0',
                time: 0,
                src: 'Music/takeoff.mp3',
            },
            theLastStand: {
                title: 'The Last Stand',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FScare-E%20Toons.jpg?alt=media&token=a5089b8c-46fc-41a9-9148-e19ef7b9c174',
                time: 0,
                src: 'Music/TheLastStand.mp3',
            },
            tunsinBopperV2: {
                title: 'Tunsin Bopper V2',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTunsin%20Bopper.jpg?alt=media&token=88ca675e-e196-4b4c-9401-beeda5ddecec',
                time: 0,
                src: 'Music/TunsinBopperV2mp3.MP3',
            },
            twitchingAroundV2: {
                title: 'Twitching Around V2',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTwitching%20Around%20V2.jpeg?alt=media&token=0995221a-07cd-481c-80aa-133c293b9fd2',
                time: 0,
                src: 'Music/TwitchingAroundV2.mp3',
            },
            spoons2: {
                title: 'And They Call Him "2-Spoons"',
                cover: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2F2%20spoons%20image.png?alt=media&token=a29d5f26-48c1-4776-8962-db170d2cdaa6',
                time: 0,
                src: 'Music/And They Call Him 2-Spoons.mp3',
            },
        },

        styles: {
            spans: {
                textAlign: 'center',
                color: '#4cc530',
                fontFamily: 'monospace',
                fontSize: '15px',
                fontWeight: '100',
                margin: 'none',
                padding: '10px',
                border: 'none',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
            },
            progressBar: {
                border: 'none',
                backgroundColor: '#232324',
                marginBottom: '2px',
            },
            musicPlayerDiv: {
                width: '350px',
                padding: '10px',
                height: 'auto',
                borderRadius: '30px',
                margin: 'auto',
                border: '#343435 double 5px',
                boxShadow: '0 0 10px #343435',
                backgroundColor: '#454546',
                overflow: 'hidden',
                float: 'left',
            },
            coverDiv: {
                backgroundColor: 'transparent',
                visibility: 'hidden',
                position: 'absolute',
                opacity: '0.5',
                width: '98vw',
                margin: 'auto',
                height: '200px',
                zIndex: 1,
            },
            playerButtonImage: {
                width: '20px',
                height: '20px',
                verticalAlign: 'middle',
            },
            albumCover: {
                height: '150px',
                width: '150px',
                border: '5px double #454546',
                borderRadius: '50%',
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            trackTable: {
                width: '100%',
                marginTop: '50px',
                tableLayout: 'fixed',
                transitionProperty: 'opacity',
                transitionDuration: '0.75s',
                opacity: '1.0',
                zIndex: 0,
            },
            titles: {
                transitionProperty: 'color transform',
                transitionDuration: '0.75s',
                maxWidth: '60vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                zIndex: -1,
            },
        },
    };

    render() {
        return (
            <React.Fragment>
                <h1>
                You want music samples, we got music samples. Approximatley one crap ton of samples right here:
                </h1>

                <div className="contentSection"></div>
                
                <button type="button" onClick={function() {changePage('sheetMusic')}}>
                    <h3 style={{color: 'yellow', fontSize: '40px'}}>
                        New on NewRinaldi: Get ya original sheet music right here!
                    </h3>
                </button>

                <div className="contentSection"></div>
                
                <div id="all-music">
                    {this.getMusicPlayers()}
                </div>

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

    getMusicPlayers() {
        //get the tracks into a usable list
        let allTracks = [];

        for (let i = 0; i < this.state.trackList.length; i++) {
            allTracks.push(this.state.tracks[this.state.trackList[i]])
        };

        //now load the HTML
        let musicPlayerHTML = [];

        //desktop players
        if (isMobile() == false) {
            allTracks.forEach((track) => {
                musicPlayerHTML.push(
                    <React.Fragment>    {/* COVER */}
                        <div style={this.state.styles.coverDiv} id={"cover"+track.title} className="musicCover"></div>
                        <table style={this.state.styles.trackTable} id={"entireTrack"+track.title}>
                            <thead>
                                <tr>
                                    <td colSpan="2">
                                        <p id={"title"+track.title} style={this.state.styles.titles}>    {/*TRACK TITLE */}
                                            {track.title}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>        {/*TRACK ALBUM COVER IMAGE */}
                                        <img src={track.cover} style={this.state.styles.albumCover}
                                        className="albumCover" id={"albumCover"+track.title}/>
                                    </td>
                                    <td>    {/* ACTUAL PLAYER */}
                                        <div style={this.state.styles.musicPlayerDiv} id={"player"+track.title}>
                                            <table style={{tableLayout: 'unset'}}>
                                                <thead>
                                                    <tr>
                                                        <td>    {/* PLAY PAUSE BUTTON */}
                                                            <button id={"playPauseButton"+track.title}
                                                             onClick={function() {playPauseClicked(track)}} type="button">
                                                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FPlay%20Button.png?alt=media&token=1f4da03d-8933-4df9-ae65-b785a99466ba'
                                                                 id={"playPause"+track.title}
                                                                style={this.state.styles.playerButtonImage}/>
                                                            </button>
                                                        </td>
                                                        <td>    {/* TIMER */}
                                                            <span id={"timer"+track.title} style={this.state.styles.spans}>
                                                                0:00 / 0:00
                                                            </span>
                                                        </td>
                                                        <td>    {/* STOP BUTTON */}
                                                            <button type="button" onClick={function() {stopMusic(track)}}>
                                                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FStop%20Button.png?alt=media&token=a1ce12f3-41c9-4bee-b847-5c66c2d26de0'
                                                                 style={this.state.styles.playerButtonImage} />
                                                            </button>
                                                        </td>
                                                        <td>    {/* PROGRESS BAR */}
                                                            <progress id={"progress"+track.title}
                                                             style={this.state.styles.progressBar}>
                                                            </progress>
                                                        </td>
                                                        <td>    {/* MUTE UNMUTE BUTTON */}
                                                            <button type="button" onClick={function() {muteUnmuteClicked(track)}}>
                                                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FMute%20Button.png?alt=media&token=0c180655-58f7-4db4-a472-f1f95483e8e9'
                                                                 style={this.state.styles.playerButtonImage}
                                                                 id={"muteUnmute"+track.title} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                        <div className="contentSection"></div>
                    </React.Fragment>
                );
            });
        }

        //mobile players
        else {
            allTracks.forEach((track) => {
                musicPlayerHTML.push(
                    <React.Fragment>

                        {/* COVER (not album cover, invisible cover) */}
                        <div style={this.state.styles.coverDiv} id={"cover"+track.title} className="musicCover"></div>

                        {/* entire track wrapper */}
                        <div style={{transitionProperty: 'opacity',
                    transitionDuration: '0.75s',
                    width: '100%',
                    marginTop: '80px',
                    opacity: '1.0',
                    zIndex: 0,}} id={"entireTrack"+track.title}>
                            
                            {/*TRACK TITLE */}
                            <p id={"title"+track.title} style={this.state.styles.titles}>    
                                {track.title}
                            </p>

                            {/*TRACK ALBUM COVER IMAGE */}
                            <img src={track.cover} style={this.state.styles.albumCover} 
                            className="albumCover" id={"albumCover"+track.title}/>

                            {/* ACTUAL PLAYER */}
                            <div style={{
                                width: '300px',
                                padding: '10px',
                                height: 'auto',
                                borderRadius: '30px',
                                margin: '50px auto',
                                border: '#343435 double 5px',
                                boxShadow: '0 0 10px #343435',
                                backgroundColor: '#454546',
                                overflow: 'hidden',
                            }} id={"player"+track.title}>
                                <table style={{tableLayout: 'unset'}}>
                                    <thead>
                                        <tr>
                                            <td>
                                                
                                                {/* PLAY PAUSE BUTTON */}
                                                <button id={"playPauseButton"+track.title}
                                                    onClick={function() {playPauseClicked(track)}} type="button">
                                                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FPlay%20Button.png?alt=media&token=1f4da03d-8933-4df9-ae65-b785a99466ba'
                                                     id={"playPause"+track.title}
                                                    style={this.state.styles.playerButtonImage}/>
                                                </button>
                                            </td>
                                            <td>
                                                
                                                {/* TIMER */}
                                                <span id={"timer"+track.title} style={this.state.styles.spans}>
                                                    0:00 / 0:00
                                                </span>
                                            </td>
                                            <td>
                                                
                                                {/* STOP BUTTON */}
                                                <button type="button" onClick={function() {stopMusic(track)}}>
                                                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FStop%20Button.png?alt=media&token=a1ce12f3-41c9-4bee-b847-5c66c2d26de0'
                                                     style={this.state.styles.playerButtonImage} />
                                                </button>
                                            </td>
                                            <td style={{width: '35%'}}>
                                                
                                                {/* PROGRESS BAR */}
                                                <progress id={"progress"+track.title}
                                                    style={{border: 'none',
                                                    backgroundColor: '#232324',
                                                    marginBottom: '2px',
                                                    width: '100%'}}>
                                                </progress>
                                            </td>
                                            <td>
                                                
                                                {/* MUTE UNMUTE BUTTON */}
                                                <button type="button" onClick={function() {muteUnmuteClicked(track)}}>
                                                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FMute%20Button.png?alt=media&token=0c180655-58f7-4db4-a472-f1f95483e8e9'
                                                     style={this.state.styles.playerButtonImage}
                                                        id={"muteUnmute"+track.title} />
                                                </button>
                                            </td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="contentSection"></div>
                    </React.Fragment>
                )
            })
        }

        //finally, return the HTML
        return musicPlayerHTML;
    };
};

export default Music;