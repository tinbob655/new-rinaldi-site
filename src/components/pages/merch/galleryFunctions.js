//get all images from firebase
const merchImages = ['https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FBlack%20t-shirt.webp?alt=media&token=23e326fe-e707-4bd7-9081-6495bb607ff5',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FR4R%20hoodie.webp?alt=media&token=2786c12a-39eb-41e2-84c0-27432b1b6eea',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FR4R%20t-shirt.webp?alt=media&token=722502d2-2420-48ea-abff-602046109139',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2F2-spoons%20hoodie.webp?alt=media&token=609c99e5-4250-492c-abae-2087603b0359',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FTodd%20is%20bad%20at%20golf%20t-shirt.webp?alt=media&token=7ae0cec0-0700-4a43-b538-4f9bc412a611',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2FWhite%20Hoodie.webp?alt=media&token=e4bbbcf7-c2e1-43b1-b8a1-2f1115a45655',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2Fblack%20hoodie.webp?alt=media&token=1f7e4a5d-84f1-4eb1-8972-8cd4fc6248fe',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2Fblack%20long%20sleeve%20t-shirt.webp?alt=media&token=85cbdf51-b048-4d05-b6fb-e42ed20da0a7',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2Fblue%20t-shirt.webp?alt=media&token=fefb2ca9-4251-4172-856f-467e64ada785',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2Ftote%20bag.webp?alt=media&token=bb99e391-5366-4baa-948b-6be15d03c0e2',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2Fwhite%20long%20sleeve%20t-shirt.webp?alt=media&token=7a91883a-87b2-45c2-aaeb-c35f811d33dd',
'https://firebasestorage.googleapis.com/v0/b/newrinaldi-82cfd.appspot.com/o/images%2Fmerch%2Fwhite%20t-shirt.webp?alt=media&token=bd38bcce-4fc5-4a23-85d0-13545a0c45c3'];

var galleryNum = 1;

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

export function galleryMove() {

    galleryAction(() => {
        for(let i = 0; i < 3; i++) {
            
            //increment each gallery image by 1
            let length = merchImages.length;
            document.getElementById('image'+i).src = merchImages[isInBounds(0, length -1, (galleryNum%length) +i)];
        };

        //increment the gallery index counter
        galleryNum++;
    });
};

export function galleryRefresh() {

    //make sure the gallery is not in resting position
    if ((galleryNum%merchImages.length)-1 != 0) {
        galleryAction(() => {

            //reset each image
            for (let i = 0; i < 3; i++) {
                document.getElementById('image'+i).src = merchImages[i];
            };

            //reset the gallery index counter to 1
            galleryNum = 0;
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
}