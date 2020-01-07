
//moves returns an array that contains a random letter column and random number row
const moves = () =>{

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const nums = [1,2,3,4,5,6,7,8,9,10];

  let randLetter = Math.floor(Math.random()*10);
  let randNums = Math.floor(Math.random()*10 + 1);

  let move = [letters[randLetter], nums[randNums]];
  return move;
}

