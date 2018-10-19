function range(a)
{
	if ( a >= 50 && a <= 99)
	{
		return true;
	}
	else
	 {
		return false;
	}
return a;
}

console.log(range(40) === false);
console.log(range(50) === true);
console.log(range(90) === true);
console.log(range(100) === false);
