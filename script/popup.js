const projectCards = document.querySelector('.card-pages');
const projectBtn = document.querySelector('.myButton');

projectBtn.addEventListener('click', showProject);

function showProject() {
    popup.style.top = "0";
};

let popup = document.createElement('div');
popup.id = 'project-popup';
popup.className = 'note'
popup.innerHTML = '<p>Hello</p>';
document.body.appendChild(popup);

const style = document.createElement('style');
style.innerHTML = `
    .note {
        background-color: white;
        color: black;
        width: 90vw;
        height: 123vh;
        position: fixed;
        z-index: 100000;
        top: 100;
        margin: 5vw;
        border-radius: 20px;
        text-align: center;
        border: solid black
    }
    `;
document.head.appendChild(style);
