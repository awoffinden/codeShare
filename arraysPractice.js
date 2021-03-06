//Once you complete a problem, open up Chrome and check the answer in the console.

//1. Create a function named 'first' that is given 'arr' as the argument and  returns the first item the given array.
var arr = [10,20,30];

  //Code Here

  var first = function(arr) {
	 return arr[0];
  }






// 2. Create a function named 'last' that is given 'arr' as the argument and returns the last item the given array.
var arr = [40,50,60];

  //Code Here

var last = function(arr) {
	return arr[arr.length -1]
}




// 3. Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.
var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];

  //Code Here

  var looper = function(family) {
	for (var ii=0; ii<family.length;ii++) {
		alert(family[ii])
	}	
  }





// 4. Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.
var letters = ['A', 'B', 'C', 'D', 'E'];

  //Code Here






//5. Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array.
var nums = [1,2,3,6,22,98,45,23,22,12];

  //Code Here
var evenFinder = function(nums) {
	for (var ii=nums.length-1; ii>=0; ii--) {
		if (nums[ii]%2 != 0) {
			nums.splice(ii, 1);
		}
	}
}
evenFinder(nums);
console.log(nums);




// 6. Write a function called divider that is given three arguments, nums, evens, and odds.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = []


  //Code Here
var divider = function(nums, evens, odds) {
	for (var ii=0; ii<nums.length; ii++) {
		if (nums[ii]%2 === 0) {
			evens.push(nums[ii]);
		} else {
			odds.push(nums[ii]);
		}
	}
	nums.length = 0;
	nums.push(evens);
	nums.push(odds);
	
}
divider(nums, evens, odds);
console.log(nums);




//7. Below your given a function that will return a random number between 0 and 30, and an array full or numbers. Your job is to write a function named finder that will get a random number, 
//then loop through the array to see if that random number is in the array. If it is, return true, if it's not, return false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var finder = function(numbers) {
	//cheating by using indexOf rather than looping
	if(numbers.indexOf(getRandomArbitrary()) != -1) {
		return true;
	} else {
		return false;
	}
}

finder(numbers);




//8. Write a function called reverse that takes is given str as it's only argument and returns that string after it's been reversed
var str = 'this is my sentence';

  //Code Here

var reverse = function(str) {
	return str.split("").reverse().join("");
}
reverse(str);




/*9. Here we're going to write a function that mimics going shopping and checking things off of our grocery list, and adding new items to our list. 
     Write a function called removeItem that is given two arguments, the first is myGroceryList, and the second is an item to remove from myGroceryList. 
	 If the second argument (or the item to add or remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list. 
	 Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. 
	 In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.*/
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];



//removeItem('chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem('Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];

var removeItem = function(myGroceryList, remove_Item) {
	if (myGroceryList.indexOf(remove_Item) !== -1) {
		myGroceryList.splice(myGroceryList.indexOf(remove_Item), 1);
	}
	return myGroceryList;
}

var addItem = function(myGroceryList, add_Item) {
	if (myGroceryList.indexOf(add_Item) == -1) {
		myGroceryList.push(add_Item);
	}
	return myGroceryList;
}

removeItem(myGroceryList, 'chips');
addItem(myGroceryList, 'Jerky');
console.log(myGroceryList)




//10. Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

var maker = function() {
	var nums_Array = new Array();
	for (var ii=1; ii<=215; ii++) {
		nums_Array.push(ii);
	}
	return nums_Array;
}
console.log(maker());





//11. Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]
var numbers = [5, '9', 16, 19, '25', '34', 48];

  //Code Here

var addTen = function(numbers) {
	var nums_Array = new Array();
	for (var ii=0; ii<numbers.length; ii++) {
		nums_Array.push(parseInt(numbers[ii]) + 10);
	}
	return nums_Array;
}
console.log(addTen(numbers));




//12. Below is some code that adds a random number to both arr1 and arr2.
var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
//Write a function that is given arr1 and arr2 is it's only arguments. Return the array which is longest.

var longestArray = function(arr1, arr2){
	if (arr1.length < arr2.length) {
		return arr2;
	} else {
		return arr1;
	}
}
console.log(arr1);
console.log(arr2);
console.log(longestArray(arr1, arr2));

/*13. As a continuation of the previous problem, write another function called 'both'. Your 'both' function will be given two arguments,
      arr1 and arr2 (from the previous example) 'both' should return a new array full of numbers that are found in both arr1 and arr2.*/


var both = function(arr1, arr2) {
	var nums_Array = new Array();
	for (var ii=0; ii < arr1.length; ii++) {
		if (arr2.indexOf(arr1[ii]) !== -1) {
			nums_Array.push(arr1[ii]);
		}
	}

	return nums_Array;
}

console.log(both(arr1,arr2));
