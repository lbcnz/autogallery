
//Listen for a keydown
let lastKeyTime = Date.now();
document.addEventListener('keydown', async event => {
    const currentTime = Date.now();
    if (currentTime - lastKeyTime > 150) {
        lastKeyTime = currentTime;
        if (event.keyCode === 72) { //if 'h' it will toogleNSFW
            document.getElementById('button-sfw').click();
        }
        else if (event.keyCode === 82) { //if 'r' it will toogleShuffle
            document.getElementById('button-shuffle').click();
        }
    }
    return;
})

//Inits the gallery
function initGallery() {
    lightGallery(document.getElementById('lightgallery'));
}

//Show/hide not safe for work elements
function toogleNSFW() {
    var e = document.getElementsByClassName('nsfw');
    var a = document.getElementById('button-sfw-wrap');
    var b = document.getElementById('button-nsfw-wrap');
    for (let i=0; i<e.length; i++) {
        if (e.item(i).style.display != 'inline') {
            e.item(i).style.display = 'inline';
            a.style.display = 'none';
            b.style.display = 'block';
        } else {
            e.item(i).style.display = 'none';
            a.style.display = 'block';
            b.style.display = 'none';
        }
    }
    return
}

//Shuffle elements using Fisher-Yates algo
function shuffleCards() {
    let cards = document.getElementById('lightgallery').innerHTML.split('\n');
    let m = cards.length -2;

    while (m) {
        let i = Math.floor(Math.random() * m--);
        let t = cards[m+1];
        cards[m+1] = cards[i];
        cards[i] = t;
    }

    document.getElementById('lightgallery').innerHTML = cards.join('\n');

    //Needs to reinit it every shuffle
    initGallery()
    return;
}
