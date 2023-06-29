//import firebase functions
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

const audio = document.getElementById('audio');
var playing = false;
var currentTrack = '';

function convertElapsedTime(inputSeconds) {
    //converts a 2dp float into a time in the format 0:00
    var seconds = Math.floor(inputSeconds % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    };
    var minutes = Math.floor(inputSeconds / 60);
    return String(minutes + ":" + seconds);
};

audio.ontimeupdate = function updateSpanAndProgress() {
    //if the audio is not quite ready, stop from returning NaN
    if (audio.currentTime < 0.01) {
        return null;
    };

    //has the audio finished
    if (audio.currentTime == audio.duration) {
        stopMusic(currentTrack);
    };

    try {
        const span = document.getElementById('timer'+currentTrack.title);
        const progressBar = document.getElementById('progress'+currentTrack.title);

        let currentTime = convertElapsedTime(audio.currentTime);
        let duration = convertElapsedTime(audio.duration);

        //make sure the user cannot see 'NaN:NaN'
        if (currentTime == 'NaN:NaN' || duration == 'NaN:NaN') {
            throw Error;
        };
        
        //update the span
        span.innerText = currentTime+ ' / ' + duration;
    
        //update the progress bar
        progressBar.value = audio.currentTime;
        progressBar.max = audio.duration;
    
        //save the time of the current track
        currentTrack.time = audio.currentTime;
    } catch {
        return null;
    };
};

export function playPauseClicked(track) {
    currentTrack = track;

    //if music is not currently playing (play function)
    if (playing == false) {
        const storage = getStorage();
        getDownloadURL(ref(storage, track.src))
            .then((url) => {
                console.log(url)
                audio.src = url;
                //resume the audio if necessary
                if (track.time != 0) {
                    audio.currentTime = track.time;
                };
                //play the audio
                audio.play();

                //frontend
                //change the play symbol to a pause sybmol
                document.getElementById('playPause'+track.title).src = 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FPause%20Button.png?alt=media&token=5f1aa461-2d36-4954-80eb-aca77cb6b1e8';
                //make the current track title bigger and yellow
                const currentTrackTitle = document.getElementById('title'+track.title);
                currentTrackTitle.style.color = 'yellow';
                currentTrackTitle.style.transform = 'scale(1.5, 1.5)';
                //make the album cover image gradually spin
                document.getElementById('albumCover'+track.title).classList.add('spinning');
                //show the covers over all other tracks
                document.querySelectorAll('.musicCover').forEach((cover) => {
                    //if the cover is not the cover for the current track, show it
                    if (cover.id != 'cover'+track.title) {
                        //show all of the covers other than the one for the current track
                        cover.style.visibility = 'visible';
                        //fade out all of the other tracks
                        document.getElementById('entireTrack'+cover.id.replace('cover', '')).style.opacity = 0.25;
                    }
                });
            
                playing = true;
            });
    }

    //if music is playing (pause function)
    else if (playing == true) {
        //pause the audio
        audio.pause();

        //frontend
        //change pause symbol to play sumbol
        document.getElementById('playPause'+track.title).src = 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FPlay%20Button.png?alt=media&token=1f4da03d-8933-4df9-ae65-b785a99466ba';
        //make the current track title back to normal
        const currentTrackTitle = document.getElementById('title'+track.title);
        currentTrackTitle.style.color = '#4cc530';
        currentTrackTitle.style.transform = 'scale(1, 1)';
        setTimeout(() => {
            currentTrackTitle.style.transform = 'unset';
        }, 751);
        //stop the album cover spinning
        document.getElementById('albumCover'+track.title).classList.remove('spinning');
        //hide all of the covers
        document.querySelectorAll('.musicCover').forEach((cover) => {
            cover.style.visibility = 'hidden';
            //unfade all of the traks
            document.getElementById('entireTrack'+cover.id.replace('cover', '')).style.opacity = 1.0;
        });

        playing = false;
    };
};

export function stopMusic(track) {
    //pause the music
    playing = true;
    playPauseClicked(track);

    //wait until the pause function is done
    setTimeout(() => {
        //frontend
        document.getElementById('timer'+track.title).innerText = '0:00 / 0:00';
        document.getElementById('progress'+track.title).max = 1;
        document.getElementById('progress'+track.title).value = 0;

        //change the time stored to 0
        track.time = 0;
        currentTrack.time = 0;
    }, 10);
};

export function muteUnmuteClicked(track) {

    //if the audio is not currently muted (mute function)
    if (audio.volume != 0) {
        //change the mute button image
        document.getElementById('muteUnmute'+track.title).src = 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FUnmute%20Button.png?alt=media&token=4687cc6c-549a-4f57-847f-8e9b6a2935e2';
        //change the colour of the track title
        document.getElementById('title'+track.title).style.color = '#c57130';

        //mute the audio
        audio.volume = 0;
    }

    //if the audio is currently muted (unmute function)
    else if (audio.volume == 0) {
        //change the mute button image
        document.getElementById('muteUnmute'+track.title).src = 'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2FinteractiveElements%2FMute%20Button.png?alt=media&token=0c180655-58f7-4db4-a472-f1f95483e8e9';
        //change the colour of the track title
        document.getElementById('title'+track.title).style.color = (playing == true ? 'yellow' : '#4cc530');

        //mute the audio
        audio.volume = 1;
    };
};