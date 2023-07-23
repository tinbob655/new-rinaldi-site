import React, {Component} from 'react';
import {changePage} from '../index.js';
import { isMobile } from '../index.js';

const allBackgroundImages = ['https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FBig%20Jungle%20innit.png?alt=media&token=4bdd8dfa-6a5a-4416-8dc5-086cf387ae90',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FChristmas%20Crunker.jpg?alt=media&token=32e71a67-8396-47b8-9c61-cbc55118201a',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FMarch%20of%20leader%20ransome.jpg?alt=media&token=775a222d-131d-4152-aed5-766c1b4de3c1',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FR4R%20image.jpeg?alt=media&token=6f494af0-7eac-4f8b-8c2e-4de688c78775',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FScare-E%20Toons.jpg?alt=media&token=a5089b8c-46fc-41a9-9148-e19ef7b9c174',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FsovietMachine3Cover.jpg?alt=media&token=7617f186-209d-4535-af1d-b0dcf93f0bee',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2Ftakeoff.jpg?alt=media&token=455591b1-966b-4f7b-ab5a-05eb9c17d1b0',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTunsin%20Bopper.jpg?alt=media&token=88ca675e-e196-4b4c-9401-beeda5ddecec',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTwitching%20Around%20V2.jpeg?alt=media&token=0995221a-07cd-481c-80aa-133c293b9fd2',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FbackgroundImages%2FLogo%20Dark.png?alt=media&token=8a485c80-590b-4e2c-a24f-42338bdff567'];

function repetedlyChangeBackgroundImage() {
    const changingImage = document.getElementById('changingImage');
    const delay = (delay) => { return new Promise(resolve => setTimeout(resolve, delay));}
    let backgroundImage = 0;

    async function changeImageOnce() {

        //spin the image out
        changingImage.style.transform = 'rotate(360deg) scale(0, 0)';

        await delay(750);

        //change the src of the image
        changingImage.src = allBackgroundImages[backgroundImage % allBackgroundImages.length];
        backgroundImage++;

        await delay(750);

        //spin the image back in
        changingImage.style.transform = 'rotate(0deg) scale(1, 1)';

        await delay(5000);

        //repeat to load each image
        changeImageOnce();
    };

    setTimeout(() => {
        changeImageOnce();
    }, 1000);
};

setTimeout(() => {
    repetedlyChangeBackgroundImage()
}, 1000);

class Footer extends Component {

    state = {
        styles: {
            footerDivStyle: {
                fontFamily: 'monospace',
                color: '#6b6b6b',
                fontWeight: 200,
                textAlign: 'center',
                fontSize: '15px',
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '10px',
                marginTop: '50px',
                display: 'block',
            },
            changingBackgroundImageWrapper: {
                border: '10px double #343435',
                borderRadius: '50%',
                width: '25vw',
                height: '25vw',
                marginLeft: 'auto',
                marginRight: 'auto',
                overflow: 'hidden',
                backgroundColor: '#272728',
                zIndex: 1,
            },
            changingImage: {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                transitionProperty: 'transform',
                transitionDuration: '1s',
            },
        },
    };

    render() {
        return (
            <div id="footer" style={this.state.styles.footerDivStyle}>
                {/*changing background */}
                <div id="changingBackgroundCoverImageWrapper" style={this.state.styles.changingBackgroundImageWrapper}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FbackgroundImages%2FLogo%20Dark.png?alt=media&token=8a485c80-590b-4e2c-a24f-42338bdff567'
                     style={this.state.styles.changingImage} id="changingImage" alt="Internet Is Required To Load Images"/>
                </div>
                <p>
                    Contact us if you really must at:
                </p>
                <p style={{fontSize: '15px', fontFamily: 'monospace', fontWeight: '100'}}>
                    newrinaldisings@gmail.com
                </p>
                <p>
                    (we are almost guaranteed not to reply)
                </p>
                <p>
                    Founded by tinbob655 and Vinyl5five
                </p>
                {this.getGamesPageButton()}
                Created with Will R's brain<br/>Music from NewRinaldi by Alex P and Will R<br/>
                NewRinaldi®©™.ltd.inc.org.net.co.uk are not responcible for any injuries or death including removal of limbs due to 
                the wearing of merch<br/>All rights reserved NewRinaldi®©™.ltd.inc.org.net.co.uk<br/>NewRinaldi®©™.ltd.inc.org.net.co.uk
                is a credit broker not a lender
            </div>
        );
    };

    getGamesPageButton() {
        if (sessionStorage.getItem('currentPage') != 'games' && isMobile() == false) {
            return (
                <button onClick={function() {changePage('games')}} type="button">
                    <h3>
                        Click here for NewRinaldi games!!
                    </h3>
                </button>
            );
        }
        else return <></>
    };
};

export default Footer;