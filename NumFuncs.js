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
	// This uses the function above, findFactor(),
	// to accumulate all factors of num in an array.
	// The array is returned.
	var factors = [1];
	var currentNum = num;
	var currentFac = findFactor(num);
	if (currentFac == 1) return factors;
	while (currentFac != 1)
	{
	     factors.push(currentFac);
	     currentNum = currentNum/currentFac;
	     currentFac = findFactor(currentNum);
	}
	factors.push(currentNum);
	return factors;
}

function getSquareRoot (num)
{
	// first, exit the function if num=1
	if ( num == 1 ) return 1;

	// Next, step up the square ladder until currentSquare
	// is either equal to or greater than num
	//var root, currentSquare;
	var root = 1;
	var currentSquare = root*root;
	while ( currentSquare < num ) 
	{
		root += 1;
		currentSquare = root * root;
	}

	// now, currentSquare is either > or = to num
	// if num is a square, this function returns its root
	if ( currentSquare == num ) return root;
	return 0;
}

function getCubeRoot (num)
{
	// first, exit the function if num=1
	if ( num == 1 ) return 1;

	// Next, step up the cube ladder until currentCube
	// is either equal to or greater than num
	//var root, currentCube;
	var root = 1;
	var currentCube = root*root*root;
	while ( currentCube < num ) 
	{
		root += 1;
		currentCube = root * root * root;
	}

	// now, currentCube is either > or = to num
	// if num is a cube, this function returns its root
	if ( currentCube == num ) return root;
	return 0;
}

function checkTriangle (num)
{
     
}
