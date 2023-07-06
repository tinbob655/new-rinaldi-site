import React, {Component} from 'react';
import {isMobile} from '../../../index.js';
//import gallery functions
import { moveGallery, refreshGallery, showSheetMusic } from './sheetMusicGalleryFunctions.js';

class Merch extends Component {

    state = {

        styles: {
            galleryWrapper: {
                borderRadius: '20px',
                padding: '2px 10px 20px 10px',
                backgroundColor: '#6d6c6c',
                boxShadow: '0 0 50px #6d6c6c',
                width: '90%',
                marginRight: 'auto',
                marginLeft: 'auto',
            },
            galleryImage: {
                width: '100%',
                height: 'auto',
                display: 'unset',
                verticalAlign: 'middle',
                transitionProperty: 'opacity transform',
                transitionDuration: '0.75s',
            },
            galleryImageMobile: {
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '75%',
                height: 'auto',
            },
            albumCover: {
                borderRadius: '50%',
                border: '10px solid #343435',
                width: '75%',
                height: 'auto',
                verticalAlign: 'middle',
                padding: '0',
                marginTop: '50px',
            },
            albumCoverMobile: {
                borderRadius: '50%',
                border: '15px solid #343435',
                width: '75%',
                height: 'auto',
                padding: '0',
                margin: '50px auto',
            },
            gallery: {
                transitionProperty: 'opacity',
                transitionDuration: '0.5s',
            },
            musicTitle: {
                paddingTop: '0px',
                marginTop: '0px',
                transitionProperty: 'color transform',
                transitionDuration: '0.75s',
            },
            sheetMusicWrapperDiv: {
                width: '85%',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '10px',
                maxHeight: '0',
                transitionProperty: 'max-height',
                transitionDuration: '0.75s',
                overflow: 'hidden',
            },
            sheetMusicWrapperDivMobile: {
                width: '95%',
                marginLeft: 'auto',
                marginRight: 'auto',
                border: 'none',
                padding: '0',
                maxHeight: '0',
                transitionProperty: 'max-height',
                transitionDuration: '0.75s',
                overflow: 'hidden',
            },
        },
    };

    render() {
        
        //desktop sheet music
        if (isMobile() == false) {
            return (
                <React.Fragment>
                    
                    <h1>
                        NewRinaldi original sheet music!
                    </h1>
    
                    <div className="contentSection"></div>
    
                    <p>
                        That's right, we've decided to upload original sheet music for some reason. Here's to more plagiarism!
                    </p>
    
                    <div className="contentSection"></div>
    
                    <p style={{marginBottom: '20px'}}>
                        Just click on any track to reveal free sheet music!!!
                    </p>
    
                    <div style={this.state.styles.galleryWrapper} id="galleryWrapper">
                        <table>
                            <tr style={{height: '100%'}}>
    
                                <td style={{width: '12.5%'}}>   {/*REFRESH BUTTON */}
                                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2Frefresh.svg?alt=media&token=b7dca4f6-fbe3-4fdd-881f-2485ec413282'
                                     style={this.state.styles.galleryImage}
                                    onClick={function() {refreshGallery()}} className="growOnHover" alt="Internet is required to load images"/>
                                </td>
    
                                <td>
                                    <table style={{tableLayout: 'fixed'}}>
                                        <div id="mainGallery" style={this.state.styles.gallery}>
                                            <tr>
    
                                                {/* SLOT 0 */}
                                                <td style={{width: '20%'}}>
                                                    <button type="button" onClick={function() {showSheetMusic(0)}}>
                                                        <h2 id="textSlot0" style={this.state.styles.musicTitle} className='musicTitle'>
                                                            Takeoff
                                                        </h2>
                                                        <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2Ftakeoff.jpg?alt=media&token=455591b1-966b-4f7b-ab5a-05eb9c17d1b0'
                                                         style={this.state.styles.albumCover}
                                                        className="centered growOnHover" id="cover0" alt="Internet is required to load images"/>
                                                    </button>
                                                </td>
    
                                                {/* SLOT 1 */}
                                                <td style={{width: '35%'}}>
                                                    <button type="button" onClick={function() {showSheetMusic(1)}}>
                                                        <h2 id="textSlot1" style={this.state.styles.musicTitle} className='musicTitle'>
                                                            Cut It Out
                                                        </h2>
                                                        <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTwitching%20Around%20V2.jpeg?alt=media&token=0995221a-07cd-481c-80aa-133c293b9fd2'
                                                         style={this.state.styles.albumCover}
                                                        className="centered growOnHover" id="cover1" alt="Internet is required to load images"/>
                                                    </button>
                                                </td>
    
                                                {/* SLOT 2 */}
                                                <td style={{width: '20%'}}>
                                                    <button type="button" onClick={function() {showSheetMusic(2)}}>
                                                        <h2 id="textSlot2" style={this.state.styles.musicTitle} className='musicTitle'>
                                                            March Of The Soviet Machine V3
                                                        </h2>
                                                        <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FsovietMachine3Cover.jpg?alt=media&token=7617f186-209d-4535-af1d-b0dcf93f0bee'
                                                         style={this.state.styles.albumCover}
                                                        className="centered growOnHover" id="cover2"alt="Internet is required to load images"/>
                                                    </button>
                                                </td>
    
                                            </tr>
                                        </div>
                                    </table>
                                </td>
                                <td style={{width: '12.5%'}}>   {/* MOVE GALLERY BUTTON */}
                                    {/* MOVE BUTTON INVISIBLE COVER */}
                                    <div id="moveButtonCover" style={{opacity: 0.0, width: '100%', height: '100%', position: 'absolute',
                                    backgroundColor: 'red', display: 'unset', marginLeft: 0, zIndex: 2, visibility: 'hidden',}}></div>
                                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2Fright%20arrow.svg?alt=media&token=297f3c8e-6e13-4651-87fb-173816dea64d'
                                     style={this.state.styles.galleryImage} 
                                    onClick={function() {moveGallery()}} className="growOnHover" id="sheetMusicMoveButton" alt="Internet is required to load images"/>
                                </td>
                            </tr>
                        </table>
    
                        {/* ACTUAL SHEET MUSIC */}
                        <div id="sheetMusicWrapper" style={this.state.styles.sheetMusicWrapperDiv}>
                            {/* HTML will be inserted from Js */}
                        </div>
                    </div>
                </React.Fragment>
            );
        }

        //mobile sheet music
        else {
            return (
                <React.Fragment>

                    <h1>
                        NewRinaldi original sheet music!
                    </h1>

                    <div className="contentSection"></div>

                    <p>
                        That's right, we've decided to upload original sheet music for some reason. Here's to more plagiarism!
                    </p>

                    <div className="contentSection"></div>

                    <p style={{marginBotton: '50px'}}>
                        Just click on any track to reveal free sheet music!!!
                    </p>

                    <div style={this.state.styles.galleryWrapper} id="galleryWrapper">

                        {/* REFRESH BUTTON */}
                        <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2Frefresh.svg?alt=media&token=b7dca4f6-fbe3-4fdd-881f-2485ec413282'
                         style={this.state.styles.galleryImageMobile} 
                        onClick={function() {refreshGallery()}} className="growOnHover centered" alt="Internet is required to load images"/>

                        <div className="contentSection"></div>

                        <div id="mainGallery" style={this.state.styles.gallery}>

                            {/* SLOT 0 */}
                            <button type="button" onClick={function() {showSheetMusic(0)}}>
                                <h2 id="textSlot0" style={this.state.styles.musicTitle} className='musicTitle'>
                                    Takeoff
                                </h2>
                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2Ftakeoff.jpg?alt=media&token=455591b1-966b-4f7b-ab5a-05eb9c17d1b0'
                                 style={this.state.styles.albumCoverMobile}
                                className="centered growOnHover" id="cover0" alt="Internet is required to load images"/>
                            </button>

                            <div className="contentSection"></div>

                            {/* SLOT 1 */}
                            <button type="button" onClick={function() {showSheetMusic(1)}}>
                                <h2 id="textSlot1" style={this.state.styles.musicTitle} className='musicTitle'>
                                    Cut It Out
                                </h2>
                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTwitching%20Around%20V2.jpeg?alt=media&token=0995221a-07cd-481c-80aa-133c293b9fd2'
                                style={this.state.styles.albumCoverMobile}
                                className="centered growOnHover" id="cover1" alt="Internet is required to load images"/>
                            </button>

                            <div className="contentSection"></div>

                            {/* SLOT 2 */}
                            <button type="button" onClick={function() {showSheetMusic(2)}}>
                                <h2 id="textSlot2" style={this.state.styles.musicTitle} className='musicTitle'>
                                    March Of The Soviet Machine V3
                                </h2>
                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FsovietMachine3Cover.jpg?alt=media&token=7617f186-209d-4535-af1d-b0dcf93f0bee'
                                 style={this.state.styles.albumCoverMobile}
                                className="centered growOnHover" id="cover2" alt="Internet is required to load images"/>
                            </button>

                        </div>

                        <div className="contentSection"></div>

                        {/* ALL MOVE BUTTON CONTENT */}
                        {/* Move button disable cover */}
                        <div id="moveButtonCover" style={{opacity: 0.0, width: '80%', height: '150%', position: 'absolute',
                        backgroundColor: 'red', display: 'unset', marginLeft: 0, zIndex: 2, visibility: 'hidden',}}></div>

                        {/* Actual move button */}
                        <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2Fdown%20arrow.png?alt=media&token=84ba7e79-445d-4c10-be9e-32965e4c41eb'
                         style={this.state.styles.galleryImageMobile} 
                        onClick={function() {moveGallery()}} className="growOnHover centered" id="sheetMusicMoveButton" alt="Internet is required to load images"/>
                            
    
                        {/* ACTUAL SHEET MUSIC */}
                        <div id="sheetMusicWrapper" style={this.state.styles.sheetMusicWrapperDivMobile}>
                            {/* HTML will be inserted from Js */}
                        </div>

                    </div>

                </React.Fragment>
            );
        };
    };
};

export default Merch;