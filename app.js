const links = document.querySelectorAll('a');
const body = document.querySelector('body');

document.querySelector('h1').innerText = "HACKED!";

function hackLinks() {
    for (const link of links){
        link.href = "https://thebadguys.com"
        };
    };
hackLinks();

hackedPicture = document.createElement('img')
hackedPicture.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"

body.prepend(hackedPicture)





// * Deletes the paragraph tags that are direct children of `<main>`
// * Adds a paragraph tag to the end of the document that says "Your account has been compromised."
// * Reset the days counter to `0`
