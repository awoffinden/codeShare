//Once you complete a problem, open up Chrome and check the answer in the console.

//1. Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
	var me = new Object();
	me.name = "Aaron Woffinden";
	me.age = 37;
	
	console.log(me);
	







//2. Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
  var favoriteThings = new Object();
  favoriteThings = {
		band: "My Chemical Romance",
		food: "Mexican",
		person: "Jenny",
		book: "Ender's Game",
		movie: "Lawrence of Arabia",
		holiday: "Christmas"
  }
  favoriteThings.car = "Spider";
  favoriteThings.brand = "Darma";
  
  console.log(favoriteThings);
  
 


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here

 favoriteThings.food = "Lettuce";
  favoriteThings.book = "50 Shades of Crap";
  
  console.log(favoriteThings);






/*3. Create an empty Object called backPack. Now, create a variable called 'item' and set it equal to the string 'firstPocket'. 
 *   Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'. Set the value of that key to 'chapstick'.
 *   Using dot notation, add another key (or property) to your backPack object that is named color, with the value being the color of your backpack. */

  //Code here

  var backPack = {};
  var item = 'firstPocket';
  backPack[item] = "chapstick";
  backPack.color = "blue";
  
  
//After you do the above, alert your entire backPack object.

  //Code here
alert(backPack)
  
//You probably noticed that it just alerted [object Object]. Alerting to see the data in your Object doesn't work very well. Instead, console.log your whole backPack object and then check out the console. 

  //Code here
console.log(backPack)








//4. Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here

//Now, loop through your object and alert each value. 

  //Code Here

var me = {
	name: "Bob Freeman",
	age: 112,
	height: "5'3\"",
	gender: "both",
	married: "work",
	eyeColor: "yes :)",
	hairColor: "dark"
};

for (var ii in me) {
		alert(ii + ": " + me[ii]);
}

//5. Create an Object called 'album' with 5 keys, each named a different song title,the values will be the length of each song.

  //Code Here

//Now, loop through your album object alerting every song title individually.

  //Code Here

var album = {};
album["I'm not OK"] = "3:00";
album["I shot the sheriff"] = "2:13";
album["Land down under"] = "3:21";
album["Red Wine"] = "3:43";
album["Woman don't cry"] = "5:32";

for (var ii in album) {
		alert(ii + ": " + album[ii]);
}




//6. Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  //Code Here

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  //Code Here


var states = {};
states["sanity"] = 12000;
states["doubt"] = 31000;
states["denial"] = 14000;
states["wonder"] = 32000;
states["confusion"] = 120000;

for (var ii in states) {
	if (states[ii] > 30000) {
		alert(ii + ": " + states[ii]);
	}
}






/* 7. Below you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. */
var user = {
    name: 'Jane Doe',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'janeDoe55',
    age: 0
}

  //Code Here

for (var ii in user) {
	if (user[ii] == false || isNaN(user[ii]) || user[ii] == null || user[ii] == undefined) {
		delete user[ii];
	}
}
 
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username').

  //Code Here

user.name = "Aaron";
user.pwHash = "asdfasdd";
user.username = "awoffinden";

console.log(user);







//8. You have the following user object below. The user wants to change there name and email address to the following:  name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.
var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};

  //Code Here
 
user.name = "Tyler S. Mcginnis";
user.email = "tyler.mcginnis@devmounta.in";

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here

user.sayName()







//9. Create an empty object called methodCollection.

  //Code Here

var methodCollection = {};
  
/*Now add two methods (functions that are properties on objects) to your methodCollection object. 
  One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. */

  //Code Here

 methodCollection.alertHello = function() {
		alert("hello");
	} 
  methodCollection.logHello = function() {
		console.log("hello");
	} 
	
//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();










/* 10. Below you're given an empty array with four objects. Fill the devMountainEmployees array with those four objects. 
       After that console.log the length of the Array and make sure that it's equal to 4. */
var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}

devMountainEmployees[0] = tyler;
devMountainEmployees[1] = cahlan;
devMountainEmployees[2] = ryan;
devMountainEmployees[3] = colt;
console.log(devMountainEmployees.length);
  //Code Here

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
  Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

  //Code Here
for (var ii = 0; ii < devMountainEmployees.length; ii++) {
	if (devMountainEmployees[ii] === "cahlan") {
		devMountainEmployees.slice(ii,1);
	}
}
console.log(devMountainEmployees);







/*11. Below you have an array full of objects. A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of Data is to have an Array full of objects. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];

//Create an empty array called users.

  //Code Here
var user = [];

/*Now add three user objects to your users array. Each user object should contain the following properties. name, email, password, username.*/
//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}
var user2 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis32@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}
var user3 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis31@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}
//Your Code Here
user[0] = user1;
user[1] = user2;
user[2] = user3;
/*Now you have a very common data structure. Twitter is a good use case. It's easy to imagine that your followers list on Twitter is an Array full or objects and those objects 
  contain properties about the specific person you follow.*/
//Now let's say that Tyler decided to delete his account. Loop through your array of objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him). 
//Once you find the particular indice he's located in, delete him from the array.

  //Code Here
  for (var ii = (user.length - 1); ii >= 0; ii--) {
	  
	if (user[ii].email === 'tylermcginnis33@gmail.com') {
		alert(user[ii].email);
		user.splice(ii,1);
	}
  }
  console.log(user)
