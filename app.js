const links = document.querySelectorAll('a');
const body = document.querySelector('body');

// * Changes the contents of the `h1` to "HACKED!"
document.querySelector('h1').innerText = "HACKED!";

// * Change the href of all the links to `https://thebadguys.com`
function hackLinks() {
    for (const link of links){
        link.href = "https://thebadguys.com"
        };
    };
hackLinks();

// * Adds this image to the beginning of the body: `https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png`
hackedPicture = document.createElement('img')
hackedPicture.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"

body.prepend(hackedPicture)

// * Deletes the paragraph tags that are direct children of `<main>`
const pTags = document.querySelectorAll('main > p')

for (let i = 0; i < pTags.length; i++) {
    pTags[i].remove();
};

// * Adds a paragraph tag to the end of the document that says "Your account has been compromised."
const hackerMessage = document.createElement('p')
hackerMessage.innerText = "Your account has been compromised."

body.append(hackerMessage)

// * Reset the days counter to `0`
const daysCounter = document.querySelector('span')
daysCounter.innerText = 0
