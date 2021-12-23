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




  function launchSection(){

    for(let i = 0; i < projects.length; i++){
      const parentNode = document.querySelector('#mainContainer');
    
        const existingNode = document.querySelector('#about')
        const projectSection = document.createElement('section');
        const details = document.createElement('section');
        const snapshot = document.createElement('section');
        
        if(i%2 === 0){
          snapshot.classList.add('snapshot', 'item-a') ;   
        }
        else{
          snapshot.classList.add('snapshot', 'item-b');
        }
        if(i%2 !== 0){
          details.classList.add('snapshot', 'item-a') ;   
        }
        else{
          details.classList.add('snapshot', 'item-b');
        }

        projectSection.classList.add(`cardPages`, `grid-pages`);
       
        snapshot.innerHTML = `<img class="responsiveImg" 
        src=${projects[i].image} alt="project image" />`
  
    details.innerHTML = `<h2 class="cardH2">${projects[i].name}</h2>
    <ul class="cardUl1"> <li class="canopy">CANOPY</li>
      <li class="canopy-detail"> <span>&#183;</span>
      </li> <li class="canopy-detail">Back End Dev</li>
      <li class="canopy-detail">  <span>&#183;</span>
      </li> <li class="canopy-detail">2015</li></ul>
    <p class="cardP">
    ${projects[i].description}
    </p>
    <ul class="cardUl2">
      <li class="card-li">${projects[i].technologies[0]}</li>
      <li class="card-li">${projects[i].technologies[1]}</li>
      <li class="card-li">${projects[i].technologies[2]}</li>
    </ul>`;
    
    const projectbtn = document.createElement('button');
    projectbtn.classList.add('myButton' , 'projectDetails');
    projectbtn.innerHTML= 'See project';
    
    projectSection.appendChild(snapshot);
    details.appendChild(projectbtn);
    projectSection.appendChild(details);
   existingNode.parentNode.insertBefore(projectSection, existingNode);
}
  }

 // Popup section




 function launchPopup (){

const close = document.createElement('p');
close.className('')















 }















window.addEventListener('load', (event) => {

  launchSection();
    //console.log('page is fully loaded');
  });




