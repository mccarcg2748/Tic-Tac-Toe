const boxes = document.querySelectorAll(".boxes");
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
let modal = document.getElementById('modal');
let modalContent = document.getElementById('modal-content');
let modalContent2 = document.getElementById('modal-content2');
let text = document.getElementById('text');
const btn = document.getElementById('btn');
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

startGame();


for(const box of boxes){
  box.addEventListener('click', () => {
    if(box.innerHTML != ''){
      box.removeEventListener('click');
    }
    if(player1.classList.contains('selected')){
      let x = document.createElement('P');
      let letter = document.createTextNode('X');
      x.appendChild(letter);
      x.classList.add('letter')
      box.appendChild(x);
      console.log(box.innerHTML);
      if(box.id == 'box1'){
        arr[0] = 1;
        console.log(arr);
      }
      if(box.id =='box2'){
        arr[1] = 1
      }
      if(box.id =='box3'){
        arr[2] = 1
      }
      if(box.id =='box4'){
        arr[3] = 1
      }
      if(box.id =='box5'){
        arr[4] = 1
      }
      if(box.id =='box6'){
        arr[5] = 1
      }
      if(box.id =='box7'){
        arr[6] = 1
      }
      if(box.id =='box8'){
        arr[7] = 1
      }
      if(box.id =='box9'){
        arr[8] = 1
      }
      console.log(arr);
    }
    if(player2.classList.contains('selected')){
      let x = document.createElement('P');
      let letter = document.createTextNode('O');
      x.appendChild(letter);
      x.classList.add('letter')
      box.appendChild(x);
      if(box.id == 'box1'){
        arr[0] = 2;
      }
      if(box.id == 'box2'){
        arr[1] = 2;
      }
      if(box.id == 'box3'){
        arr[2] = 2;
      }
      if(box.id == 'box4'){
        arr[3] = 2;
      }
      if(box.id == 'box5'){
        arr[4] = 2;
      }
      if(box.id == 'box6'){
        arr[5] = 2;
      }
      if(box.id == 'box7'){
        arr[6] = 2;
      }
      if(box.id == 'box8'){
        arr[7] = 2;
      }
      if(box.id == 'box9'){
        arr[8] = 2;
      }
    }
    console.log(arr);
    changeTurn();
    checkIfWinner();
    checkIfDraw();
  })
}


function startGame() {
  modal.style.visibility = "hidden";
  for(const box of boxes) {
    box.innerHTML = "";
  }
  arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  player1.classList.add('selected');
}

function changeTurn(){
  if(player1.classList.contains('selected')) {
    player1.classList.remove('selected');
    player2.classList.add('selected');
  }
  else{
    player2.classList.remove('selected');
    player1.classList.add('selected');
  }
}


function checkIfWinner(){
  if(arr[0] === 1 && arr[1] === 1 && arr[2] === 1){
    console.log('Player 1 wins');
    player1Wins();
  }
  if(arr[0] === 1 && arr[3] === 1 && arr[6] === 1){
    console.log('Player 1 wins');
    player1Wins()
  }
  if(arr[0] === 1 && arr[4] === 1 && arr[8] === 1){
    console.log('Player 1 wins');
    player1Wins()
  }
  if(arr[6] === 1 && arr[4] === 1 && arr[2] === 1){
    console.log('Player 1 wins');
    player1Wins()
  }
  if(arr[1] === 1 && arr[4] === 1 && arr[7] === 1){
    console.log('Player 1 wins');
    player1Wins()
  }
  if(arr[2] === 1 && arr[5] === 1 && arr[8] === 1){
    console.log('Player 1 wins');
    player1Wins()
  }
  if(arr[3] === 1 && arr[4] === 1 && arr[5] === 1){
    console.log('Player 1 wins');
    player1Wins()
  }
  if(arr[6] === 1 && arr[7] === 1 && arr[8] === 1){
    console.log('Player 1 wins');
    player1Wins()
  }

  if(arr[0] === 2 && arr[1] === 2 && arr[2] === 2){
    console.log('Player 2 wins');
    player2Wins()
  }
  if(arr[0] === 2 && arr[3] === 2 && arr[6] === 2){
    console.log('Player 2 wins');
    player2Wins()
  }
  if(arr[0] === 2 && arr[4] === 2 && arr[8] === 2){
    console.log('Player 2 wins');
    player2Wins()
  }
  if(arr[6] === 2 && arr[4] === 2 && arr[2] === 2){
    console.log('Player 2 wins');
    player2Wins()
  }
  if(arr[1] === 2 && arr[4] === 2 && arr[7] === 2){
    console.log('Player 2 wins');
    player2Wins()
  }
  if(arr[2] === 2 && arr[5] === 2 && arr[8] === 2){
    console.log('Player 2 wins');
    player2Wins()
  }
  if(arr[3] === 2 && arr[4] === 2 && arr[5] === 2){
    console.log('Player 2 wins');
    player2Wins()
  }
  if(arr[6] === 2 && arr[7] === 2 && arr[8] === 2){
    console.log('Player 2 wins');
    player2Wins()
  }
}

function checkIfDraw(){
  let draw = arr.every((e) => {
    return e > 0;
  })
  if(draw && modalContent2.childElementCount === 0){
    console.log('Draw');
    modal.style.visibility = 'visible'
    let y  = document.createElement('P');
    let text = document.createTextNode("Draw")
    y.appendChild(text);
    y.classList.add('text');
    modalContent2.appendChild(y);
    btn.addEventListener('click', () => {
      console.log('hi this is Connor');
      modal.style.visibility = 'hidden';
      for(const box of boxes){
        box.innerHTML = "";
      }
      arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      player2.classList.remove('selected');
      player1.classList.add('selected');
      modalContent2.removeChild(y);
    });
  }
}

function player1Wins(){
  modal.style.visibility = 'visible'
  let y  = document.createElement('P');
  let text = document.createTextNode("X's Win!")
  y.appendChild(text);
  y.classList.add('text');
  modalContent2.appendChild(y);
  btn.addEventListener('click', () => {
    console.log('hi this is Connor');
    modal.style.visibility = 'hidden';
    for(const box of boxes){
      box.innerHTML = "";
    }
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    player2.classList.remove('selected');
    player1.classList.add('selected');
    modalContent2.removeChild(y);
  });
}

function player2Wins(){
  modal.style.visibility = 'visible'
  let y  = document.createElement('P');
  let text = document.createTextNode("O's Win!")
  y.appendChild(text);
  y.classList.add('text');
  modalContent2.appendChild(y);
  btn.addEventListener('click', () => {
    console.log('hi this is Connor');
    modal.style.visibility = 'hidden';
    for(const box of boxes){
      box.innerHTML = "";
    }
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    player2.classList.remove('selected');
    player1.classList.add('selected');
    modalContent2.removeChild(y);
  });
}
