const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const nums = [1,2,3,4,5,6,7,8,9,10];

const player = {
  name: 'Player',
  ships: ['Carrier', 'Destroyer', 'BattleShip', 'Cruiser', 'Submarine']
  
};

const computer = {
  name: 'Computer',
  move: function() {
  
    let randLetter = Math.floor(Math.random() * 10);
    let randNums = Math.floor(Math.random() * 10 + 1);
  
    let move = [letters[randLetter], nums[randNums]];
    return move;
  }
};

const createBoard = (board) => {

  for (let i = 0; i < 10; i++) {
    $(`.${board}`).append(`<div class='display'>${i + 1}</div>`);
    for (let j = 0; j < 10; j++) {
      $(`.${board}`).append(`<div id="box${letters[j]}${nums[i]}"></div>`);
    }
  }
};

const boardString = (lettersArr, numsArr) =>{
  let boardStr = '';
  for (const i of lettersArr) {
    for (const j of numsArr) {
      if (i === 'J' && j === 10) {
        boardStr += `#box${i + j}`;
      } else {
        boardStr += `#box${i + j}, `;
      }
    }
  }
  return boardStr;
};


//loads function onload
$(function() {
  createBoard('userBoard');
  createBoard('computerBoard');
});

const startGame = () =>{
  $('.buttons').slideUp();
  $('.computerBoard').css('display', 'grid').slideDown();
  $('h2').toggle();
  $('h3').slideDown();
};

$(document).on('click', boardString(letters, nums), function(event) {
  let id = event.target.id.slice(3);
  console.log(id);
});






