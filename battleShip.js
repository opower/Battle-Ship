const player = {
  
}

const computer = {
  name: 'Computer',
  move: function(){
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const nums = [1,2,3,4,5,6,7,8,9,10];
  
    let randLetter = Math.floor(Math.random()*10);
    let randNums = Math.floor(Math.random()*10 + 1);
  
    let move = [letters[randLetter], nums[randNums]];
    return move;
  }
}

//loads function onload
$(function(){
  creatBoard();
  // $('.box').bind('click', function(){
  //   alert($(this).text());
  // });
});

const creatBoard = () => {
  
  for(let i = 0; i < 10; i++){
      $('.userBoard').append(`<div class='display'>${i+1}</div>`)
    for(let j = 0; j < 10; j++){
      $('.userBoard').append(`<div class="box"></div>`)
    }

  }
}


// const startGame = () =>{
//   alert('Working')
// }






