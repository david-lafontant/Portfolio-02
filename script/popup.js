const zero = 0;
const one = 1;
const two = 2;


const projects = [
  {

    'description': `A daily selection of privately personalized 
    reads; no accounts or sign-ups required..`,
    'image': `images/tonic1.svg`,
    'linkToDemo': `https://david-lafontant.github.io/Portfolio/`,
    'linkToSources': `https://github.com/david-lafontant/Portfolio`,
    'name': `Tonic`,
    'technologies': [
  `HTML`,
  `CSS`,
  `JS`
  ]
  },
  {
    'description': `A daily selection of privately personalized 
    reads; no accounts or sign-ups required..`,
    'image': `images/multipost.svg`,
    'linkToDemo': `https://david-lafontant.github.io/Portfolio/`,
    'linkToSources': `https://github.com/david-lafontant/Portfolio`,
    'name': `Multi-Post Stories`,
    'technologies': [
  `HTML`,
  `CSS`,
  `JS`
  ]
  },
  {
    'description': `A daily selection of privately personalized 
    reads; no accounts or sign-ups required..`,
    'image': `images/tonic2.svg`,
    'linkToDemo': `https://david-lafontant.github.io/Portfolio/`,
    'linkToSources': `https://github.com/david-lafontant/Portfolio`,
    'name': `Tonic`,
    'technologies': [
  `HTML`,
  `CSS`,
  `JS`
  ]
  },
  {
    'description': `A daily selection of privately personalized 
    reads; no accounts or sign-ups required..`,
    'image': `images/multipost2.svg`,
    'linkToDemo': `https://david-lafontant.github.io/Portfolio/`,
    'linkToSources': `https://github.com/david-lafontant/Portfolio`,
    'name': `Multi-Post Stories`,
    'technologies': [
  `HTML`,
  `CSS`,
  `JS`
  ]
  }
  ];

  function popupTemplate(num){
return `<section class="cardPages" id="modalPage">
<section class="card-details" id="card-detail-1">
  <p class="p1"><i class="fas fa-times closePopup"></i></p>
  <h2 class="cardH2 cardH2modal" id="
  h2Modal">${projects[num].name}</h2>
  <ul class="cardUl1">
            <li class="canopy">CANOPY</li>
            <li class="canopy-detail">
              <span>·</span>
            </li>
            <li class="canopy-detail">Back End Dev</li>
            <li class="canopy-detail">
              <span>·</span>
            </li>
            <li class="canopy-detail">2015</li>
          </ul>
</section>
<section class="snapshot" id="poster">
<img class="responsiveImg" 
       src=${projects[num].image} alt="project image" />
</section>
<section class="card-details card-grid" id="card-detail-2">
  <p class="cardP sec-a" id="lp">
Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not
only five centuries, but also the leap into electronic typesetting,
remaining essent
</p>
<p class="cardP sec-a" id="bp">
Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s, when an unknown printer took a galley of type
and scrambled it to make a type specimen book. It has survived not
only five centuries, but also the leap into electronic typesetting,
remaining essent
 </p>
<ul class="cardUl2 sec-b">
<li class="card-li">${projects[num].technologies[zero]}</li>
<li class="card-li">${projects[num].technologies[one]}</li>
<li class="card-li">${projects[num].technologies[two]}</li>
          </ul>
<ul id="otherTechno" class="cardUl2 sec-c">
<li class="card-li">Github</li>
<li class="card-li">Ruby</li>
<li class="card-li">Bootstrap</li>
</ul>
  <div class="flexButton sec-d">
    <a class="myButton modalButton" href=" 
    https://david-lafontant.github.io/Portfolio/"
     target="_blank"><span>See Live 
     </span> <img src="images/Icon.svg"> </a>
    <a class="myButton modalButton" 
    href="https://github.com/david-lafontant/Portfolio" target="_blank">
    <span>See Source </span>  <i class="fab fa-github"></i></a>
  </div>
</section>
</section>
<script src="script/popup.js"></script>`;

  }

  function launchSection(){

    let boutton = 0;

    for (let num = 0; num < projects.length; num += one){
      const parentNode = document.querySelector('#mainContainer');
        const existingNode = document.querySelector('#about')
        const projectSection = document.createElement('section');
        const details = document.createElement('section');
        const snapshot = document.createElement('section');

        if (num % two === zero){
          snapshot.classList.add('snapshot', 'item-a');
        } else {
          snapshot.classList.add('snapshot', 'item-b');
        }
        if (num % two === zero){
          details.classList.add('snapshot', 'item-b');
        } else {
          details.classList.add('snapshot', 'item-a');
        }

        projectSection.classList.add(`cardPages`, `grid-pages`);
        snapshot.innerHTML = `<img class="responsiveImg" 
        src=${projects[num].image} alt="project image" />`

    details.innerHTML = `<h2 class="cardH2">${projects[num].name}</h2>
    <ul class="cardUl1"> <li class="canopy">
    CANOPY</li><li class="canopy-detail">
<span>&#183;</span></li> <li class="canopy-detail">Back End Dev</li>
<li class="canopy-detail"><span>&#183;</span></li> <li class="canopy-detail">
2015</li></ul><p class="cardP">
    ${projects[num].description}
    </p>
    <ul class="cardUl2">
      <li class="card-li">${projects[num].technologies[zero]}</li>
      <li class="card-li">${projects[num].technologies[one]}</li>
      <li class="card-li">${projects[num].technologies[two]}</li>
    </ul>`;
    const projectbtn = document.createElement('button');

    projectbtn.classList.add('myButton', 'projectDetails');
    projectbtn.innerHTML = 'See project';
    projectSection.appendChild(snapshot);
    details.appendChild(projectbtn);
    projectSection.appendChild(details);
   existingNode.parentNode.insertBefore(projectSection, existingNode);
   const ledetail = document.querySelectorAll('.projectDetails');

   boutton = ledetail;
}


// }
for (let num = 0; num < boutton.length; num += one) {
  boutton[num].addEventListener('click', () => {
    const popupOverlay = document.createElement('div');

    popupOverlay.setAttribute('id', 'overlay');
    popupOverlay.innerHTML = popupTemplate(num);
    document.body.appendChild(popupOverlay);
    const closeBtn = document.querySelector('.closePopup');

    closeBtn.addEventListener('click', () =>{

      const toDelete = document.querySelector('#overlay');

      document.body.removeChild(toDelete);
    });


  });


}


}

 // Popup section

window.addEventListener('load', (event) => {

  launchSection();
    // Console.log('page is fully loaded');
  });