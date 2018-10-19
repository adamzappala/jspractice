function countVowels(string)
{
	let countA = string.split("a").length-1;
	let countE = string.split("e").length-1;
	let countI = string.split("i").length-1;
	let countO = string.split("o").length-1;
	let countU = string.split("u").length-1;
	return countA + countE + countI + countO + countU;
}
console.log(countVowels("map")=== 1);
console.log(countVowels("rude")=== 2);
console.log(countVowels("i went to the store today!") === 8)
