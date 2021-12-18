/* eslint-disable func-style */
/* eslint-disable arrow-parens */
const projectBtn = document.querySelectorAll('.myButton');

const myHeadings = document.getElementsByClassName('cardH2');

const headingContent = [];

const webLanguages = [];

const popup = [];

const paragraph = `  <p class="cardP">
Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not
only five centuries, but also the leap into electronic typesetting,
remaining essent
</p>`;

const sources = "https://github.com/david-lafontant/Portfolio";
const lives = "https://david-lafontant.github.io/Portfolio/";

const closeSign = `<p class="p1"><i class="fas fa-times closePopup"></i></p>`;

const myCanopy = document.querySelectorAll('.cardUl1');
const canopy = [];
const web = document.getElementsByClassName('cardUl2');

const style = document.createElement('style');

const myImages = document.getElementsByClassName('responsiveImg');
const imageContent = [];

for (let num = 0; num < myHeadings.length; num += 1){
  const item = `<h2 class="cardH2 cardH2modal">${myHeadings[num].textContent}</h2>`;

  headingContent.push(item);
}

for (let num = 0; num < myImages.length; num += 1){
  const item = `<img src=${myImages[num].src} alt="project image">`;

  imageContent.push(item);
}

for (let num = 0; num < myCanopy.length; num += 1){
  const item = `<ul class="cardUl1">${myCanopy[num].innerHTML}</ul>`;

  canopy.push(item);
}

for (let num = 0; num < web.length; num += 1){
  const item = `<ul class="cardUl2">${web[num].innerHTML}</ul>`;

  webLanguages.push(item);
}

for (let num = 0; num < myCanopy.length; num += 1){
  const item = {
"theHead": headingContent[num],
"theCanopy": canopy[num],
"theImage": imageContent[num],
"sourceLink" : sources,
"lieLink" : lives,
  };

popup.push(item);
}

// eslint-disable-next-line no-unused-vars
const popupTemplate = (num) => `<section class="cardPages modalPages">
<section class="card-details">
  ${closeSign}
  ${popup[num].theHead}
  ${popup[num].theCanopy}
</section>
<section class="snapshot">
${popup[num].theImage}
</section>
<section class="card-details">
${paragraph}
${webLanguages[num]}
  <div class="flexButton">
    <a class="myButton modalButton" href =" ${lives}"><span>See Live </span> <img src="images/Icon.svg" > </a>
    <a class="myButton modalButton" href = "${sources}"><span>See Source </span>  <i class="fab fa-github"></i></a>
  </div>
</section>
</section>
<script src="script/popup.js"></script>
`;
function closePopup(){
  const closed = document.querySelector('.closePopup');
  closed.addEventListener('click', async () => {
    window.location.reload();
  });
}
// eslint-disable-next-line no-plusplus
for (let i = 0; i < projectBtn.length; i++) {
  projectBtn[i].addEventListener('click', () => {
    document.body.innerHTML = popupTemplate(i);
    closePopup();
  });
}



style.innerHTML = `
@media screen and (max-width: 991px) {
    .cardH2modal {
        font-family: Poppins, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 44px;
        color: #172b4d;
        margin-top: 0.5rem;
        padding: 0;
    }
    .p1{
    text-align:right;}
    }
    .cardUl1 {
        display: flex;
        gap: 0.1
        margin-top: 0.5rem;
        margin-bottom: 1.1rem;
        list-style-type: none;
    }
.flexButton{
    display: flex;padding: 0.1em 0.3em;
    justify-content: space-around;}

    .modalButton{
        display: flex;
        gap: 0.3rem;
        padding: 0.3em 0.6em;
    }


`;

document.head.appendChild(style);