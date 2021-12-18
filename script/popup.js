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

const closeSign = `<p><i class="fas fa-times closePopup"></i></p>`;

const myCanopy = document.querySelectorAll('.cardUl1');
const canopy = [];
const web = document.getElementsByClassName('cardUl2');

const myImages = document.getElementsByClassName('responsiveImg');
const imageContent = [];

for (let num = 0; num < myHeadings.length; num += 1){
  const item = `<h2 class="cardH2">${myHeadings[num].textContent}</h2>`;

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
"theImage": imageContent[num]
  };

popup.push(item);
}

// eslint-disable-next-line no-unused-vars
const popupTemplate = (num) => `<section class="cardPages">
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
    <button class="myButton">See project</button>
    <button class="myButton">See project</button>
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