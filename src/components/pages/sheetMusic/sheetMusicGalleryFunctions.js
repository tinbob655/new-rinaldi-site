import {isMobile} from '../../../index.js';

//define data strctures
const tracks = {
    takeoff: {
        frontendTitle: "Takeoff",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2Ftakeoff.jpg?alt=media&token=455591b1-966b-4f7b-ab5a-05eb9c17d1b0',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10381945/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
    cutItOut: {
        frontendTitle: "Cut It Out",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FTwitching%20Around%20V2.jpeg?alt=media&token=0995221a-07cd-481c-80aa-133c293b9fd2',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10442542/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
    sovietMachineV3: {
        frontendTitle: "March Of The Soviet Machine V3",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FsovietMachine3Cover.jpg?alt=media&token=7617f186-209d-4535-af1d-b0dcf93f0bee',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10562170/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
    IveHadItWithTheCrap: {
        frontendTitle: "I've Had It With The Crap",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FScare-E%20Toons.jpg?alt=media&token=a5089b8c-46fc-41a9-9148-e19ef7b9c174',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10418005/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
    ThatsCompleteLies: {
        frontendTitle: "That's Complete Lies",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FStart%20Your%20Engines%20Cover.jpg?alt=media&token=159b4b11-98cb-429d-8353-0274dab58136',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10478608/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
    DontWantTheChat: {
        frontendTitle: "Don't Want The Chat",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FScare-E%20Toons.jpg?alt=media&token=a5089b8c-46fc-41a9-9148-e19ef7b9c174',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10430263/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
    LiterallyNo: {
        frontendTitle: "Literally No",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10425661/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
    GoinMentalAtTheSkyFortress: {
        frontendTitle: "Goin' Mental At The Sky Fortress",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FBig%20Jungle%20innit.png?alt=media&token=4bdd8dfa-6a5a-4416-8dc5-086cf387ae90',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10369819/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
    ElectromanAdventures: {
        frontendTitle: "Electroman Adventures -NewRinaldi Version",
        image: 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FalbumCovers%2FWeasel%20Poppers%20Image.jpeg?alt=media&token=e1e8a6cf-91ad-413f-9446-9db718ddb0cd',

        iframe: `<iframe style="width: `+(isMobile() == true ? `100%` : `85%`)+`; height: `+(isMobile() == true ? `500px` : `75vh`) +`; margin-top: 35px; `+(isMobile() == true ? `padding: 0; border-radius: 5px;` : ` `) +`" src="https://musescore.com/user/49314299/scores/10417819/embed" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen"></iframe>`,
    },
};

const backendTrackTitles = ['takeoff' ,'cutItOut', 'sovietMachineV3', 'IveHadItWithTheCrap', 'ThatsCompleteLies',
'DontWantTheChat', 'LiterallyNo', 'GoinMentalAtTheSkyFortress', 'ElectromanAdventures'];

var galleryNumTracks = 1;

//GALLERY SCRIPTS
export function moveGallery() {
    //close any sheet music
    closeSheetMusic();
    
    //function to see if a number is in a range (operates circularly)
    function isInBounds(min, max, input) {
        if (input < min) {
            let difference = min - input - 1;
            return max - difference;
        } else if (input > max) {
            let difference = input - max - 1;
            return min + difference;
        };
        
        return input;
    };

    galleryAction(() => {
       for (let i = 0; i < 3; i++) {

        //increment each gallery image by 1
        let length = backendTrackTitles.length;
        let index = backendTrackTitles[isInBounds(0, length-1, (galleryNumTracks%length) + i)];
        document.getElementById('cover'+i).src = tracks[index].image;
        //increment titles by 1
        document.getElementById('textSlot'+i).innerText = tracks[index].frontendTitle;
       };

       //increment the gallery counter
       galleryNumTracks++;

       //if the gallery reaches the end, disable move button (to prevent errors with loop)
       if (galleryNumTracks > backendTrackTitles.length -3) {
        document.getElementById('sheetMusicMoveButton').style.opacity = 0.5;
        document.getElementById('moveButtonCover').style.visibility = 'visible';
       };
    });
};

export function refreshGallery() {
    //make sure the gallery is not in resting position
    if ((galleryNumTracks % backendTrackTitles.length)-1 != 0) {
        galleryAction(() => {
            
            //reset each image and title
            for (let i = 0; i < 3; i++) {
                document.getElementById('cover'+i).src = tracks[backendTrackTitles[i]].image;
                document.getElementById('textSlot'+i).innerText = tracks[backendTrackTitles[i]].frontendTitle;
            };

            //reset the gallery counter to 1
            galleryNumTracks = 1;

            //remove any shown sheet music
            closeSheetMusic();

            //frontend
            document.getElementById('sheetMusicMoveButton').style.opacity = 1.0;
            document.getElementById('moveButtonCover').style.visibility = 'hidden';
        });
    };
};

function galleryAction(action) {
    const gallery = document.getElementById('mainGallery');
    gallery.style.opacity = 0.0;
    setTimeout(() => {
        action();
        setTimeout(() => {
            gallery.style.opacity = 1.0;
        }, 10);
    }, 1000);
};



//SHOW / HIDE SHEET MUSIC SCRIPTS
export function showSheetMusic(slotNo) {
    
    //convert slotNo to trackNo
    const trackNo = slotNo + galleryNumTracks -1;
    
    //only fire if a different track has been selected
    if ('<div class="contentSection"></div>' + tracks[backendTrackTitles[trackNo]].iframe
     == document.getElementById('sheetMusicWrapper').innerHTML) {
        return null;
     };

    //frontend
    //reset the current sheet music's title
    document.querySelectorAll('.musicTitle').forEach(title => {
        title.style.color = '#eeeeee';
        title.style.transform = 'rotate(0deg)';
    });

    const wrapper = document.getElementById('sheetMusicWrapper');
    //alter selected music's title frontend
    const title = document.getElementById('textSlot'+slotNo);
    title.style.color = 'yellow';
    title.style.transform = 'rotate(360deg)';
    //render the music
    wrapper.innerHTML = '<div class="contentSection"></div>' + tracks[backendTrackTitles[trackNo]].iframe;
    wrapper.style.height = 'auto';
    wrapper.style.maxHeight = '300vh';
};

function closeSheetMusic() {
    const wrapper = document.getElementById('sheetMusicWrapper'); 
    //hide the music
    wrapper.style.maxHeight = '0px';
    //also revert the title's style
    document.querySelectorAll('.musicTitle').forEach(title => {
        title.style.color = '#eeeeee';
        title.style.transform = 'rotate(0deg)';
    });

    //stop the music and prevent potential errors
    setTimeout(() => {
        wrapper.innerHTML = '';
    }, 751);
};