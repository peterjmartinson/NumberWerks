function findFactor (num)
{
	// input value is num
	// flag is prime
	// we test to see if num/factor has a remainder
	// if there's no remainder, factor is a factor of num
     var prime = 1;
     var factor = 2;
     while (prime == 1)
     {
          if (num%factor == 0)
          {
               prime = 0;
          } else
          {
               factor += 1;
          };
     };
     if (factor == num) return 1
     else return factor;
}

function getAllFactors (num)
{
	var factors = [1];
	var currentFac = findFactor(num);
	if (currentFac == 1) return factors;
	while (currentFac != 1)
	{
	     factors.push(currentFac);
	     var currentNum = num/currentFac;
	     currentFac = findFactor(currentNum);
	}
	return factors;
}