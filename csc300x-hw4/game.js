const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerOptions = [rock, paper, scissors];

playerOptions.forEach(option => {
    option.addEventListener('click', addBorders);
    option.addEventListener('click', shuffle);
    option.addEventListener('click', decideWinner);
})

function addBorders(option) {
    const img = option.currentTarget;
    img.style.border = "5px solid red";
}

const image = document.getElementById('compImg');
const cycleImage = ["/images/rock.PNG",
     "/images/paper.PNG",
      "/images/scissors.PNG"];

async function shuffle(){
    image.src = cycleImage[0];
    await new Promise(r => setTimeout(r, 500));
    image.src = cycleImage[1];
    await new Promise(r => setTimeout(r, 500));
    image.src = cycleImage[2];
    await new Promise(r => setTimeout(r, 500));
    image.src = cycleImage[0];
    await new Promise(r => setTimeout(r, 500));
    image.src = cycleImage[1];
    await new Promise(r => setTimeout(r, 500));
    im.src = cycleImage[2];
    await new Promise(r => setTimeout(r, 500));
}

function decideWinner(option) {
    const computerOptions = [rock, paper, scissors];
    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = computerOptions[choiceNumber];
    let img = document.getElementById('compImg');
    img.src = computerChoice.src;

    const results = document.querySelector('#results');
    if (option === computerChoice){
        let para = document.createElement('p');
        let node = document.createTextNode('Tie');
        para.appendChild(node);
        results.appendChild(para);

        let child = document.querySelector('#result');
        results.insertBefore(child, para);
    }
    else if (option == rock){
        if (computerChoice == paper){
            let para = document.createElement('p');
            let node = document.createTextNode('Computer Won');
            para.appendChild(node);
            results.appendChild(para);
            
            let child = document.querySelector('#result');
            results.insertBefore(child, para);
        }
        else{
            let para = document.createElement('p');
            let node = document.createTextNode('You Won');
            para.appendChild(node);
            results.appendChild(para);

            let child = document.querySelector('#result');
            results.insertBefore(child, para);
        }
    }
    else if (option == paper){
        if (computerChoice == scissors){
            let para = document.createElement('p');
            let node = document.createTextNode('Computer Won');
            para.appendChild(node);
            results.appendChild(para);

            let child = document.querySelector('#result');
            results.insertBefore(child, para);
        }
        else{
            let para = document.createElement('p');
            let node = document.createTextNode('You Won');
            para.appendChild(node);
            results.appendChild(para);

            let child = document.querySelector('#result');
            results.insertBefore(child, para);
        }
    }
    else if (option == scissors){
        if (computerChoice == rock){
            let para = document.createElement('p');
            let node = document.createTextNode('Computer Won');
            para.appendChild(node);
            results.appendChild(para);

            let child = document.querySelector('#result');
            results.insertBefore(child, para);
        }
        else{
            let para = document.createElement('p');
            let node = document.createTextNode('You Won');
            para.appendChild(node);
            results.appendChild(para);

            let child = document.querySelector('#result');
            results.insertBefore(child, para);
        }
    }
}

const replayButton = document.querySelector('button');
replayButton.addEventListener('click', reload);

function reload(){
    location.reload();
}