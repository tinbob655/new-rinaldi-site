import React, {Component} from 'react';
import { isMobile } from '../../../index.js';
import {changePage} from '../../../index.js';
import './downloadsStyles.scss'

class Downloads extends Component {

    state = {
        backendTrackTitles: ['startYourEngines', 'bitHavinAFit', 'alexComp1Remix','aroundTwitching', 'christmasPresent', 'greenestGrass',
        'iAmGoingToTakeTheRights', 'twitchingAround','marchOfRansome', 'onwardsAndUpwards', 'R4RTheme', 'skidaddle',
        'summerSun', 'takeoff', 'theLastStand', 'tunsinBopperV2', 'twitchingAroundV2', 'spoons2'],

        tracks: {
            startYourEngines: {
                frontendTitle: 'Start Your Engines',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FStart%20Your%20Engines.mp3?alt=media&token=53073845-4096-43ab-9882-16c6da580b0a',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FStart%20Your%20Engines%20Cover.jpg?alt=media&token=159b4b11-98cb-429d-8353-0274dab58136',
            },
            bitHavinAFit: {
                frontendTitle: "8-Bit Havin' A Fit",
                audioSrc: "https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2F8-bit%20havin'%20a%20fit.mp3?alt=media&token=9f9ab915-e833-4500-94ab-81f0dd56f400",
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',
            },
            alexComp1Remix: {
                frontendTitle: 'March Of The Soviet Machine V3',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FMarchOfTheSovietMachineV3.mp3?alt=media&token=3a76afbf-3a9a-4e58-a689-6e9fd0479eca',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FsovietMachine3Cover.jpg?alt=media&token=7617f186-209d-4535-af1d-b0dcf93f0bee',
            },
            aroundTwitching: {
                frontendTitle: 'Around Twitching',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FAround%20Twitching.mp3?alt=media&token=49edabae-c3e2-4dd8-ae80-79a0e27fb964',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FaroundTwitchingCover.png?alt=media&token=31486fb6-1280-4b57-b483-faa912b33008',
            },
            christmasPresent: {
                frontendTitle: 'Christmas Crunker',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FChristmasPresent.mp3?alt=media&token=b97aeb95-23c2-4057-bcc8-eef5e4d2f34b',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FChristmas%20Crunker.jpg?alt=media&token=32e71a67-8396-47b8-9c61-cbc55118201a',
            },
            greenestGrass: {
                frontendTitle: 'Greenest Grass',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FGreenestGrass.mp3?alt=media&token=146ead1f-077c-4749-8f1c-cd4e503fe5e7',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FBig%20Jungle%20innit.png?alt=media&token=4bdd8dfa-6a5a-4416-8dc5-086cf387ae90',
            },
            iAmGoingToTakeTheRights: {
                frontendTitle: 'I am Going to Take Away the Significant Majority of ur Rights',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FI%20am%20going%20to%20take%20away%20the%20significant%20majority%20of%20your%20rights.mp3?alt=media&token=1ccdcaaf-a50d-4f27-98b2-f9163581cc65',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FScare-E%20Toons.jpg?alt=media&token=a5089b8c-46fc-41a9-9148-e19ef7b9c174',
            },
            twitchingAround: {
                frontendTitle: 'Twitching Around',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FTwitching%20Around.mp3?alt=media&token=cd2929e9-855b-478d-9df0-67062d4f7076',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',
            },
            marchOfRansome: {
                frontendTitle: 'March Of Leader Ransome V2',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FMarchOfLeaderRansomeV2.mp3?alt=media&token=0dd5941b-f651-45f8-b887-7bcc449edb89',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FMarch%20of%20leader%20ransome.jpg?alt=media&token=775a222d-131d-4152-aed5-766c1b4de3c1',
            },
            onwardsAndUpwards: {
                frontendTitle: 'Onwards and Upwards',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FOnwardsandUpwards.mp3?alt=media&token=69378584-8d7c-48d0-b479-df9af85d7dbc',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FBig%20Jungle%20innit.png?alt=media&token=4bdd8dfa-6a5a-4416-8dc5-086cf387ae90',
            },
            R4RTheme: {
                frontendTitle:'ready4ransome Theme', 
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FR4Rtheme.mp3?alt=media&token=d557651f-ccef-415a-80c9-2d65b85199f7',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FR4R%20image.jpeg?alt=media&token=6f494af0-7eac-4f8b-8c2e-4de688c78775',
            },
            skidaddle: {
                frontendTitle: 'Skidaddle',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2Fskidaddle.mp3?alt=media&token=8b8b95c4-446d-4fab-b534-b5095e5c43a7',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',
            },
            summerSun: {
                frontendTitle: 'Summer Sun',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FSummerSun.mp3?alt=media&token=7d182675-7688-4622-806d-93788a4d5f08',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FBig%20Jungle%20innit.png?alt=media&token=4bdd8dfa-6a5a-4416-8dc5-086cf387ae90',
            },
            takeoff: {
                frontendTitle: 'Takeoff',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2Ftakeoff.mp3?alt=media&token=26560737-9534-4fdc-bfdb-366918c2695e',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2Ftakeoff.jpg?alt=media&token=455591b1-966b-4f7b-ab5a-05eb9c17d1b0',
            },
            theLastStand: {
                frontendTitle: 'The Last Stand',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FTheLastStand.mp3?alt=media&token=0635c661-c843-4b79-af1f-6339cd3cc2ab',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FScare-E%20Toons.jpg?alt=media&token=a5089b8c-46fc-41a9-9148-e19ef7b9c174',
            },
            tunsinBopperV2: {
                frontendTitle: 'Absolute Banger - Banger Edition',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FTunsinBopperV2mp3.MP3?alt=media&token=5e5ca449-482a-48cf-97d9-0891084aa7fe',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTunsin%20Bopper.jpg?alt=media&token=88ca675e-e196-4b4c-9401-beeda5ddecec',
            },
            twitchingAroundV2: {
                frontendTitle: 'Twitching Around V2',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FTwitchingAroundV2.mp3?alt=media&token=d1e1e5b3-b755-4f74-9e6a-bbb0268c999f',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTwitching%20Around%20V2.jpeg?alt=media&token=0995221a-07cd-481c-80aa-133c293b9fd2',
            },
            spoons2: {
                frontendTitle: 'And They Call Him "2-Spoon"',
                audioSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/Music%2FAnd%20They%20Call%20Him%202-Spoons.mp3?alt=media&token=15f2fc3d-00a9-43e2-a4f1-177244937c2b',
                albumCoverSrc: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2F2%20spoons%20image.png?alt=media&token=a29d5f26-48c1-4776-8962-db170d2cdaa6',
            },
        },
    };

    render() {
        return (
            <React.Fragment>
                <h1>
                    Downloads for peasants without music service subscriptions, right here:
                </h1>

                <div className="contentSection"></div>

                <button type="button" onClick={function() {changePage('sheetMusic')}}>
                    <h3 style={{color: 'yellow', fontSize: '40px'}}>
                        New on NewRinaldi: Get ya original sheet music right here!
                    </h3>
                </button>

                <div className="contentSection"></div>

                <div id="mainGalleryWrapper">
                    {this.getDownloadGallery()}

                    <p>
                        BTW if the download buttons take you to a music player, click the three dots and then download. It happens cause ur using a crap web browser
                    </p>
                </div>
            </React.Fragment>

        );
    };

    getDownloadGallery() {
        let downloadGalleryHTML = [];
        let state = this.state;
        for (let trackNo = 0; trackNo < state.backendTrackTitles.length; trackNo++) {
            let trackData = state.tracks[state.backendTrackTitles[trackNo]];
            downloadGalleryHTML.push(Object(
                <React.Fragment>
                    <table style={{tableLayout: 'unset'}}>
                        <thead>
                            <tr>
                                <td colSpan="2">

                                    {/*TRACK TITLE*/}
                                    <p>
                                        {trackData.frontendTitle}
                                    </p>

                                </td>
                            </tr>
                            <tr>
                                <td style={isMobile() == true ? {width: '25%'} : {width: '50%'}}>

                                    {/*ALBUM COVER*/}
                                    <img src={trackData.albumCoverSrc} className="albumCoverImage rounded" style={isMobile() == true ? {height: '20vh'} : {}}/>

                                </td>
                                <td style={isMobile() == true ? {width: '75%'} : {width: '50%'}}>

                                    {/*INVISIBLE DOWNLOAD LINK*/}
                                    <a href={trackData.audioSrc} download hidden id={"hiddenDownloadLink"+trackNo}></a>

                                    {/*DOWNLOAD BUTTON*/}
                                    <button type="button" className="downloadButton" id={"downloadButton"+trackNo} onClick={function() {
                                        //download the file
                                        document.getElementById('hiddenDownloadLink'+trackNo).click();
                                    }}>
                                        {isMobile() == true ? (
                                            <h3 className='downloadButtonText'>
                                                Download
                                            </h3>
                                        ) : (
                                            <h3 className="downloadButtonText">
                                                Download:<br/><br/> {trackData.frontendTitle}
                                            </h3>
                                        )}
                                    </button>
                                </td>
                            </tr>
                        </thead>
                    </table>
                    <div className="contentSection"></div>
                </React.Fragment>
            ));
        };

        return downloadGalleryHTML;
    };
};

export default Downloads;