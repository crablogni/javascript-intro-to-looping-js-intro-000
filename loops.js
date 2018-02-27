function forLoop(array){
for (let i = 0; i < 25; i++){
  if (i === 0){
    array.push(`I am 1 a strange loop.`)
    i++
  }
  else{
    array.push(`I am ${i+1} strange loops.`)
    i++
  }
  return array;
  }
}
