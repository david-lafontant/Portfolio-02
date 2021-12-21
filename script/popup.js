/* eslint-disable no-magic-numbers */
/* eslint-disable func-style */
/* eslint-disable arrow-parens */
const projectBtn = document.querySelectorAll('.myButton');
const myHeadings = document.getElementsByClassName('cardH2');
const headingContent = [];
const webLanguages = [];
const popup = [];

const paragraph = `  <p class="cardP sec-a" id="lp">
Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not
only five centuries, but also the leap into electronic typesetting,
remaining essent
</p>`;

const paragraph2 = `<p class="cardP sec-a" id="bp">
Sed ut perspiciatis unde omnis iste natus error
 sit voluptatem accusantium doloremque laudantium, 
totam rem aperiam, eaque ipsa quae ab illo inventore
 veritatis et quasi architecto beatae vitae 
dicta sunt explicabo. Nemo enim ipsam voluptatem 
quia voluptas sit aspernatur aut odit aut fugit, 
sed quia consequuntur magni dolores eos qui ratione
 voluptatem sequi nesciunt. Neque porro quisquam 
est, qui dolorem ipsum quia dolor sit amet, 
consectetur, adipisci velit, sed quia non numquam eius 
modi tempora incidunt ut labore et dolore 
magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
 </p>`;
const webtech = `<ul id="otherTechno" class="cardUl2 sec-c">
<li class="card-li">Github</li>
<li class="card-li">Ruby</li>
<li class="card-li">Bootstrap</li>
</ul>`;
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
  const item = `<h2 class="cardH2 cardH2modal" id="
  h2Modal">${myHeadings[num].textContent}</h2>`;

  headingContent.push(item);
}
for (let num = 0; num < myImages.length; num += 1){
  const item = `<img src=${myImages[num].src} 
  class="responsiveImg" alt="project image">`;

  imageContent.push(item);
}
for (let num = 0; num < myCanopy.length; num += 1){
  const item = `<ul class="cardUl1">${myCanopy[num].innerHTML}</ul>`;

  canopy.push(item);
}
for (let num = 0; num < web.length; num += 1){
  const item = `<ul class="cardUl2 sec-b">${web[num].innerHTML}</ul>`;

  webLanguages.push(item);
}
for (let num = 0; num < myCanopy.length; num += 1){
  const item = {
    "lieLink": lives,
    "sourceLink": sources,
"theCanopy": canopy[num],
"theHead": headingContent[num],
"theImage": imageContent[num]
  };

popup.push(item);
}

// eslint-disable-next-line no-unused-vars
const popupTemplate = (num) => `<section class="cardPages" id="modalPage">
<section class="card-details" id="card-detail-1">
  ${closeSign}
  ${popup[num].theHead}
  ${popup[num].theCanopy}
</section>
<section class="snapshot" id="poster">
${popup[num].theImage}
</section>
<section class="card-details card-grid" id="card-detail-2">
${paragraph}
${paragraph2}
${webLanguages[num]}
${webtech};
  <div class="flexButton sec-d">
    <a class="myButton modalButton"
     href =" ${lives}" target="_blank"><span>See Live 
     </span> <img src="images/Icon.svg" > </a>
    <a class="myButton modalButton" 
    href = "${sources}" target="_blank">
    <span>See Source </span>  <i class="fab fa-github"></i></a>
  </div>
</section>
</section>
<script src="script/popup.js"></script>
`;

function closePopup(){
  const closed = document.querySelector('.closePopup');

  closed.addEventListener('click', ferme)

}

function ferme(){

const toDelete = document.querySelector('#overlay');

// eslint-disable-next-line no-unused-vars
const toremoved = document.body.removeChild(toDelete);

}

// eslint-disable-next-line no-plusplus
for (let num = 0; num < projectBtn.length; num += 1) {
  projectBtn[num].addEventListener('click', () => {
    const popupOverlay = document.createElement('div');

    popupOverlay.setAttribute('id', 'overlay');
    popupOverlay.innerHTML = popupTemplate(num);
    document.body.appendChild(popupOverlay);
    closePopup();
  });
}

style.innerHTML = `
#overlay{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  background-color: rgba(0, 0 , 0, 0.5);
  height:100vh;
  z-index:1000000;
  min-height: 100%;
  overflow-y: auto;
}
::-webkit-scrollbar {display:none;}

@media screen and (min-width: 992px){
    #modalPage{
        display:flex;
    flex-direction:column;
    width:80%;
    margin-left:auto;
    margin-right:auto;
    gap:0.5rem;
    padding-left:4%;
    padding-right:4%;
    }
    .p1 i{
        display:inline;
        text-align:right;
    }
    #modalPage >#card-detail-1{
        margin:0;
        padding:0;
        position:relative;
    }
    #modalPage >#card-detail-1 .p1{
        text-align:right;
    }
    #modalPage >#card-detail-1 #h2Modal{
        margin:0;
        padding:0;
    }
    #modalPage #poster {
        width: 100%;
        height: 39.8%;
        margin-right: auto;
        margin-left: auto;
        margin-bottom:3rem;
    }
    #modalPage #lp{
        display:none;
    }

    #modalPage #bp{
        text-align:justify;
        padding-right:1.1rem;
    }

    #modalPage #card-detail-2{
        position:relative;

    }
    #modalPage #card-detail-2 #bp{
        float:left;
        width:50%;
    }
    .sec-b,
    .sec-c,
    .flexButton{
        float:right;
        width:45%;

    }
#modalPage #card-detail-2 .cardUl2{
    display:flex;
    justify-content: flex-start;
    gap:1.1rem;
}

      .flexButton{
        display: flex;padding: 0;
        justify-content: flex-start;
    gap:1rem;}
    
        .modalButton{
            display: flex;
            gap: 0.3rem;
            padding: 1rem;
            marging: 1rem;
        }
        }
 
@media screen and (max-width: 991px) {
    
    .cardPages{
        justify-content:center;

    }

    .p1{
        display:inline;
        text-align:right;
        float:right;
    }
    
    .snapshot {
        width: 100%;
        height: 39.8%;
        margin-right: auto;
        margin-left: auto;
    }
      
    .responsiveImg {
        max-width: 100%;
        max-height: auto;
        object-fit: cover;
        margin-left:auto;
        margin-right:auto;
    }

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
  
    #otherTechno {display: none;}
    #bp{display:none;}
    .cardUl1 {
        display: flex;
        gap: 0.1;
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

    }
`;

document.head.appendChild(style);