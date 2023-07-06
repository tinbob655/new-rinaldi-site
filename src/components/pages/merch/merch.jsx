import React, {Component} from 'react';
import {isMobile} from '../../../index.js';
//import gallery functions
import { galleryMove, galleryRefresh } from './galleryFunctions.js';


class Merch extends Component {

    state = {
        styles: {
            galleryTable: {
                borderRadius: '20px',
                padding: '10px',
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
            },
            gallery: {
                transitionProperty: 'opacity',
                transitionDuration: '0.5s',
            },

            galleryImageMOBILE: {
                width: '50%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
    };

    render() {
        //desktop gallery
        if (isMobile() == false) {
            return (
                <React.Fragment>
                    <h1>
                        We have a significant ammount of merch, some is slightly above average quality
                    </h1>
    
                    <div className="contentSection"></div>
    
                    <h3>
                        <a href="https://newrinaldi-merch.teemill.com/" target="_blank">
                            Click here for merch. It mostly uncomfortable and is subpar in many ways. But you should buy 
                            it anyway cause NewRinaldi
                        </a>
                    </h3>
    
                    <div className="contentSection"></div>
    
                    <p style={{marginBottom: '50px'}}>
                        We sell tons of cloth
                    </p>

                    <table style={this.state.styles.galleryTable}>
                        <tr>
                            <td style={{width: '12.5%'}}>   {/*REFRESH BUTTON */}
                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2Frefresh.svg?alt=media&token=b7dca4f6-fbe3-4fdd-881f-2485ec413282'
                                 style={this.state.styles.galleryImage}
                                onClick={function() {galleryRefresh()}} className="growOnHover" alt="Internet Is Required To Load Images"/>
                            </td>
                            <td>
                                <a href="https://newrinaldi-merch.teemill.com/" target="_blank">
                                    <table style={{tableLayout: 'fixed'}}>
                                        <div id="mainGallery" style={this.state.styles.gallery}>
                                            <tr>

                                                <td style={{width: '20%'}}> {/*IMAGE 1 */}
                                                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FBlack%20t-shirt.webp?alt=media&token=23e326fe-e707-4bd7-9081-6495bb607ff5'
                                                     style={this.state.styles.galleryImage}
                                                    id="image0" alt="Internet Is Required To Load Images"/>
                                                </td>

                                                <td style={{width: '35%'}}> {/*IMAGE 2 */}
                                                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FR4R%20hoodie.webp?alt=media&token=2786c12a-39eb-41e2-84c0-27432b1b6eea'
                                                     style={this.state.styles.galleryImage} id="image1" alt="Internet Is Required To Load Images"/>
                                                </td>

                                                <td style={{width: '20%'}}> {/* IMAGE 3 */}
                                                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FR4R%20t-shirt.webp?alt=media&token=722502d2-2420-48ea-abff-602046109139'
                                                     style={this.state.styles.galleryImage}
                                                    id="image2" alt="Internet Is Required To Load Images"/>
                                                </td>

                                            </tr>
                                        </div>
                                    </table>
                                </a>
                            </td>
                            <td style={{width: '12.5%'}}>   {/* MOVE GALLERY BUTTON */}
                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2Fright%20arrow.svg?alt=media&token=297f3c8e-6e13-4651-87fb-173816dea64d'
                                 style={this.state.styles.galleryImage} 
                                onClick={function() {galleryMove()}} className="growOnHover" alt="Internet Is Required To Load Images"/>
                            </td>
                        </tr>
                    </table>
                <h3 style={{marginTop: '30px'}}>
                    <a href="https://newrinaldi-merch.teemill.com/" target="_blank">
                        If u don't buy any merch from <h3 style={{display: 'inline', textDecoration: 'underline', fontWeight: 900, color: '#afd1a8'}}>
                            this link{/*SEPEARATE H3 USED TO MAKE THE LINK BOLD AND UNDERLINED */}
                        </h3>
                        , then you will be regarded as bad (u don't want that)
                    </a>
                </h3>
                </React.Fragment>
            );
        }

        //mobile gallery
        else {
            return (
                <React.Fragment>
                    <h1>
                        We have a significant ammount of merch, some is slightly above average quality
                    </h1>
    
                    <div className="contentSection"></div>
    
                    <h3>
                        <a href="https://newrinaldi-merch.teemill.com/" target="_blank">
                            Tap here for merch. It mostly uncomfortable and is subpar in many ways. But you should buy 
                            it anyway cause NewRinaldi
                        </a>
                    </h3>
    
                    <div className="contentSection"></div>
    
                    <p style={{marginBottom: '80px'}}>
                        We sell tons of cloth
                    </p>

                    <div style={this.state.styles.galleryTable}>
                        {/*Refresh button */}
                        <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2Frefresh.svg?alt=media&token=b7dca4f6-fbe3-4fdd-881f-2485ec413282'
                         style={this.state.styles.galleryImageMOBILE} onClick={function() {galleryRefresh()}}
                        className="growOnHover" alt="Internet Is Required To Load Images"/>

                        <div className="contentSection"></div>

                        {/* Main gallery */}
                        <a href="https://newrinaldi-merch.teemill.com/" target="_blank">
                            <div id="mainGallery" style={this.state.styles.gallery}>

                                {/* Image 0 */}
                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FBlack%20t-shirt.webp?alt=media&token=23e326fe-e707-4bd7-9081-6495bb607ff5'
                                 style={this.state.styles.galleryImageMOBILE}id="image0" alt="Internet Is Required To Load Images"/>

                                <div className="contentSection"></div>

                                {/* Image 1 */}
                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FR4R%20hoodie.webp?alt=media&token=2786c12a-39eb-41e2-84c0-27432b1b6eea'
                                 style={this.state.styles.galleryImageMOBILE} id="image1" alt="Internet Is Required To Load Images"/>

                                <div className="contentSection"></div>

                                {/* Image 2 */}
                                <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FR4R%20t-shirt.webp?alt=media&token=722502d2-2420-48ea-abff-602046109139'
                                 style={this.state.styles.galleryImageMOBILE} id="image2" alt="Internet Is Required To Load Images"/>
                            </div>
                        </a>

                        <div className="contentSection"></div>

                        {/* move gallery button */}
                        <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2Fdown%20arrow.png?alt=media&token=84ba7e79-445d-4c10-be9e-32965e4c41eb'
                         style={this.state.styles.galleryImageMOBILE} onClick={function() {galleryMove()}}
                        className="growOnHover" alt="Internet Is Required To Load Images"/>
                    </div>

                    <h3 style={{marginTOp: '80px'}}>
                        <a href="https://newrinaldi-merch.teemill.com/" target="_blank">
                            If u don't buy any merch from <h3 style={{textDecoration: 'underline', display: 'inline', fontWeight: 900, color: '#afd1a8'}}>
                            this link</h3> , then you will be regarded as bad(u don't want that)
                        </a>
                    </h3>
                </React.Fragment>
            );
        };
    };
};

export default Merch;