function multiplynum(number)
{
  let multiply = number.reduce((accumulator, currentValue) => accumulator * currentValue);
  return multiply;
}
console.log((multiplynum([2,2,2])=== 8));
console.log((multiplynum([4,4,4])=== 64));
console.log((multiplynum([0,0,0])=== 0));
console.log((multiplynum([4,4,4])=== 4));
console.log((multiplynum([4,4,4])=== 233));
