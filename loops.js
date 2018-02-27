function forLoop(array){
for (let i = 0; i < 25; i++){
  if (i === 0){
    array.push(`I am 1 a strange loop.`)
  }
  else{
    array.push(`I am ${i} strange loops.`)
  }
  }
  return array;
}

function whileLoop(n){
let countdown = n;
  while (n > 0){
    console.log(--countdown)
    n--
  }
}