

function average(grades)
{
  let sum = grades.reduce((accumulator, currentValue) => accumulator + currentValue);
  let average = sum / grades.length;
  return average;
}
console.log((average([50, 60, 80, 60, 90])=== 68));
