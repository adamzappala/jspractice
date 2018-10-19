function crazyString(string)
{
	let str = string.substring(0,3);
	let newString = str + string + str;
	return newString;
}
console.log(crazyString("bruh") === "brubruhbru");
console.log(crazyString("yolo") === "yolyoloyol");
