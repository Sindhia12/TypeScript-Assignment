"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
// 2.personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var Hello = "Sindhia";
console.log("Hello ".concat(Hello, ", would you like to learn some Python today"));
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//
var person_name = "abubakar";
console.log(person_name.toLocaleLowerCase());
console.log(person_name.toLocaleUpperCase());
console.log(person_name.charAt(0));
console.log(person_name.charAt(0).toLocaleUpperCase() + person_name.slice(1));
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks//
console.log('Roy T.Bennett once said,"Do what is right not what is easy nor what is popular"');
// 5 .Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Roy T.Bennet";
var quote = " Do what is right not what is easy nor what is popular";
console.log("".concat(famous_person, " once said,").concat(quote));
//6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName = "\n\t ATIF ASLAM \t\n";
console.log(personName);
var stripped = personName.trim();
console.log(stripped);
//7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.//
//8.You should create four lines that look like this//
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//9 .Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 8;
console.log("My favorite number is ".concat(favoriteNumber));
//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// My name is Sindhia 
// Date: 18/03/2024
// this program will  run simple code just like hello world
console.log("hello world simple program");
//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.//
var friend = ["rehma", "faraz", "shafiqa"];
console.log(friend[0]);
console.log(friend[1]);
console.log(friend[2]);
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = ["rehma", "faraz", "shafiqa"];
var message = "would you like to learn typescript";
for (var i = 0; i < names.length; i++) {
    console.log(message + names[i]);
}
//exercise 13//
var transportation = ["civic", "bike", "landcruiser", "tesla"];
for (var i = 0; i < transportation.length; i++) {
    console.log('i would like to own a' + transportation[i]);
}
// exercise 14//
var guest_list = ["farhan", "ibad", "bari"];
exports.guest_list = guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected Sir/Mam' + guest_list[i] + ',\nwe invited you on dinner tommorrow.\nThank youn\n');
}
//exercise 15 //
var not_present = "farhan";
var new_guest = "aijaz";
for (var i = 0; i < not_present.length; i++) {
    console.log('respected Sir/Mam' + guest_list[i] + ',\nwe invited you on dinner tommorrow.\nThank youn\n');
}
console.log('mr . ${not_present}', ' will not coming tommorrow dinner');
//exercise 16 //
guest_list.unshift("akbar", "obaid", "asif");
for (var i = 0; i < not_present.length; i++) {
    console.log('respected Sir/Mam' + guest_list[i] + ',\nwe invited you on dinner tommorrow.\nThank youn\n');
}
//exercise 17 //
console.log("\nunfortunatly we can not arrange big table,only two people allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log('sorry Sir/madam.${remove_guest} you are not invited for dinner,');
}
for (var i = 0; i < not_present.length; i++) {
    console.log('respected Sir/Mam' + guest_list[i] + ',\nwe yes youre still  invited you on dinner tommorrow.\nThank youn\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
//exercise 18 //
var places = ["maldives", "red sea", "denmark", "russia"];
console.log("origanl +, places");
//print your array in alphabetical order without modifying the actual list
console.log('copy' + __spreadArray([], places, true).sort());
console.log('original :' + places);
console.log('copy' + __spreadArray([], places, true).sort().reverse());
console.log('copy' + __spreadArray([], places, true).sort().reverse());
console.log('original :' + places.sort());
console.log('original' + places.sort().reverse());
//exercise 19 //
// importing
//exercise 20 //
var languages = ["sindhi", "english", "urdu", "balochi", "pushto"];
console.log("list of languages:");
for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
    var top_1 = languages_1[_i];
    console.log(top_1);
}
// create two objects
var book = {
    name: "ESSENTIAL TYPESCRIPT",
    price: 450
};
var apple = {
    name: "apple",
    price: 200
};
console.log("book name: ".concat(book.name, ",price :").concat(book.price));
console.log("apple name: ".concat(apple.name, ",price :").concat(apple.price));
//exercise 22 //
var array = ['babar', 'humayun', 3, 5, 4, "javeria"];
console.log(array[5]);
console.log(array[1]);
console.log(array[2]);
//exercise 23 //
var car = "subaru";
//Test 1: Equality comparision (True)
console.log("is car == 'subaru ? i predict True");
console.log(car == 'subaru'); // True
//Test 2: Strict equality comparison (True)
console.log("is car === 'subaru'?I predict True");
console.log(car === 'subaru'); //True
//Test 3: inequality comparison
console.log("is car !='subaru'?I predict False.");
console.log(car != 'subaru'); //False
//Test 4: strict inequality comparison (False)
console.log("is car!== 'subaru'? I predict False");
console.log(car < 'subaru');
//Test:5 less then comaprison(False)
console.log("is car <'subaru'? I predict False");
console.log(car < 'subaru'); //False (lexicographic comparison)
//Test 6: greather than comparison(False)
console.log("is car > 'subaru'? I predict False");
console.log(car > 'subaru'); // False (lexicographic comparison)
//Test 7: less than and equal1 comaprison (True)
console.log("is car <='subaru'?I predict True");
console.log(car <= 'subaru'); //True
//Test 8: greater than or equal comparison(True)
console.log("is car >= 'subaru'? I predict True");
console.log(car >= 'subaru'); //True
//Test9: Checking truthness (True)
console.log("is car?I predict True");
console.log(car); //true(non empty string is truthy)
//Test 10:Chceking falseness (False)
console.log("is !car?I predict False");
console.log(car); //False (negation of a truthy value)
//Exercise 24 //
var cars = 'subaru';
var age = 25;
var numbers = [1, 2, 3, 4];
//string Test***
//test 1 :Equality (True)
console.log("is car == 'subaru'? I predictt True");
console.log(car == 'subaru'); //True (case sensitive)
//test 2  strict enquality (False)
console.log("is car ==='subaru'?I predict False");
console.log(car === 'subaru'); //false (case sensitive)
//test 3 inquality(True)
console.log("is car !='toyota'?I predict True");
console.log(car != 'toyota'); //True
//test 4 :Inequality(False)
console.log("is car !=='toyota'?I predict false");
console.log(car !== 'toyota');
// Lower case function tests *****
//Test 5: lower conversion (True)
console.log("is car.toLowercase() == 'subaru'?I prdecit True");
console.log(car.toLocaleLowerCase() == 'subaru'); //True coversion to lower case
//test 6: lower case conversion (False)
console.log("is car === tolowercase()?I predict false");
console.log(car === car.toLocaleLowerCase()); // False conversion to lower case
//***********Numeric Test*************
//Test 7:equality (True)
console.log("is age ===25?I predict True");
console.log(age === 25); //True
//test 8: equality (False)
console.log("is age !=25?I predict False");
console.log(age != 25); //False
//Test 9: greater than (False)
console.log("is age > 30?I preddict False");
console.log(age > 30);
//Test 10: less than or equal (True)
console.log("is age <= 25? I predict true");
console.log(age <= 25);
//***********Logical opertors***********//
//Test:11 AND(True)
console.log("is age > 20 && age < 30?I predict True");
console.log(age > 20 && age < 30);
//Test 12: OR (False)
console.log("is age > 30 || age < 18?I predict False");
console.log(age > 30 || age < 18);
//*************ARRAY TESTS*********************
//Test: 13 In Array (True)
console.log("is 3 in numbers? I predict True");
console.log(3 in numbers);
//Test 14: not in Array False
console.log("is 5 not in numbers?I predict False");
console.log(!(5 in numbers));
//Exercise 25 //
var alien_color = "green";
if (alien_color == "green") {
    console.log("The player just earned 5 point.");
}
alien_color = "Red";
if (alien_color == "green") {
    console.log("the player earned 5 point");
}
//exercise 26 //
var alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("the players earned 5 point for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
alien_color2 = "Red";
if (alien_color2 == "green") {
    console.log("the payer just earned 5 points.");
}
//Exercise 27 //
var alien_color3 = "green";
if (alien_color3 == "green") {
    console.log("the players earned 5 points.");
}
else if (alien_color3 == "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color3 == "Red") {
    console.log("the player just earned 15 points");
}
else {
    console.log("please select right color");
}
//version 2//
alien_color = "Red";
if (alien_color2 == "green") {
    console.log("the players earned 5 point for shooting the alien.");
}
alien_color2 = "Red";
if (alien_color2 == "green") {
    console.log("the payer just earned 5 points.");
}
else if (alien_color3 == "yellow") {
    console.log("the player earned 10 points");
}
else {
    console.log("please select right color");
}
//version 3
alien_color = "yelllow";
if (alien_color3 == "green") {
    console.log("the players earned 5 points.");
}
else if (alien_color3 == "yellow") {
    console.log("the player earned 10 points");
}
else if (alien_color3 == "Red") {
    console.log("the player just earned 15 points");
}
else {
    console.log("please select right color");
}
//Exercise 28 //
var age_ = 25;
if (age_ < 2) {
    console.log("the person ia s baby.");
}
else if (age_ >= 4 && age_ < 4) {
    console.log("the person is a toddler.");
}
else if (age_ >= 4 && age_ < 13) {
    console.log("the person is a kid.");
}
else if (age_ >= 13 && age_ < 20) {
    console.log("the person is a teenager.");
}
else if (age_ >= 20 && age_ < 65) {
    console.log("the person is a adult.");
}
else {
    console.log("person ia an elder.");
}
//Exercise 29 //
var favfruits = ['apple', 'banana', 'mango', 'orange'];
if (favfruits.includes('orange')) {
    console.log('i really like orange!');
}
if (favfruits.includes('mango')) {
    console.log('i really like mango!');
}
if (favfruits.includes('apple')) {
    console.log('i really like apple!');
}
if (favfruits.includes('graps')) {
    console.log('i really like graps!');
}
if (favfruits.includes('banana')) {
    console.log('i really like banana!');
}
//Exercise 30 //
var users = ['saba', 'rehma', 'fatima', 'taha', 'admin'];
for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
    var user = users_1[_a];
    if (users === users) {
        console.log("Hello admin, would you like to see a status report?.");
    }
    else {
        console.log("hello ".concat(user, ",thankyou for logging again."));
    }
}
//Exercise 31 //
var usersNew = ['saba', 'rehma', 'fatima', 'taha', 'admin'];
if (usersNew.length === 0) {
    console.log("we need to find some user!");
}
else {
    usersNew = [];
    console.log("all user have been removed" + usersNew.length);
}
//Exercise 32 //
var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["nida", "user6", "fatima", "admin", "affan"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, "is availabe."));
    }
    ;
});
//Exercise 33 //
var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop
for (var i = 0; i < myNumbers.length; i++) {
    // now we use conditions
    if (myNumbers[i] == 1) {
        console.log("".concat(myNumbers[i], "st"));
    }
    else if (myNumbers[i] == 2) {
        console.log("".concat(myNumbers[i], "nd"));
    }
    else if (myNumbers[i] == 3) {
        console.log("".concat(myNumbers[i], "rd"));
    }
    else if (myNumbers[i] == 4 && myNumbers[i] <= 9) {
        console.log("".concat(myNumbers[i], "th"));
    }
    //Exercise 34 //
    var myPizza = ['chese pizza', 'creamy pizza', 'vegetarian pizza'];
    for (var i_1 = 0; i_1 < myPizza.length; i_1++) {
        console.log(myPizza[i_1]);
    }
    for (var i_2 = 0; i_2 < myPizza.length; i_2++) {
        console.log("i like to eat ".concat(myPizza[i_2]));
    }
    console.log("\nI really like to eat Pizzas.Pizza come in variety of flavours and tooping, allowing individuals to customers to it to their liking");
}
//Exercise 35 //
var animal = ['dog', 'cat', 'rabbit'];
animal.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet"));
});
console.log("Any of these animals world make a great pet!");
//Exercise 36 //
function make_shirt(size, message) {
    console.log("making a ".concat(size, " T shirt with the message \"").concat(message, "\"printed on it."));
}
make_shirt("medium", "code is life");
//Exercise 37 //
function make_shirtty(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript "; }
    console.log("making a ".concat(size, "T shirt with the message \"").concat(message, "\"printed on it"));
}
make_shirtty(); //default large and message
make_shirtty("medium"); //default message,medium siza
make_shirtty("small", "dive into coding"); //custom message, small size
//Exercise 38 //
function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
;
// 3 cities
var city1 = "Karachi";
var city2 = "Islamabad";
var city3 = "Lahore";
var city4 = "hyderabad";
var city5 = "dubai";
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
//Exercise 39 //
function city_country(city, country) {
    return "$".concat(city, ",").concat(country);
}
city_country("Karachi", "Pakistan");
var mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("dubai", "UAE"));
console.log("london", "United kingdom");
console.log("Riyaz", "Saudi Arabia");
//Exercise 40 //
function myAlbum(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = myAlbum("Ali", "Rang-e-mohabbat");
var album2 = myAlbum("Mahad", "Roshan andhera");
var album3 = myAlbum("Ayaz", "Mausam -e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//Number of tracks //
function myAlbum2(artistName, albumTitle, Numberoftracks) {
    return { artistName: artistName, albumTitle: albumTitle, Numberoftracks: Numberoftracks };
}
var album4 = myAlbum2("Ali", "Dil Hai", 30);
var album5 = myAlbum2("Mahad", "Ajeeb Kahani", 55);
var album6 = myAlbum2("Affan", "Typescript ki codding", 77);
console.log(album4);
console.log(album5);
console.log(album6);
//Exercise 41 //
var magicians = ["Dynamo", "Chris", "David"];
function Show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
Show_magicians(magicians);
//Exercise 42 //
var magicianss = ["Dynamo", "Chris", "David"];
function make_great(magicianss) {
    for (var i = 0; i < magicianss.length; i++) {
        magicians[i] = magicianss[i] + " the great";
    }
}
make_great(magicianss);
Show_magicians(magicianss);
//Exercise 43 //
var magiciansss = ["David", "Alice", "Chris"];
function make_greatt(magiciansss) {
    var greatMagiciansss = [];
    magicianss.forEach(function (magician) {
        greatMagiciansss.push("".concat(magiciansss, "The great"));
    });
    return greatMagiciansss;
}
var greatmagician = make_greatt(magiciansss.slice());
console.log("original magicians:");
Show_magicians(magicians);
console.log("great magicians:");
Show_magicians(greatmagician);
//Exercise 44 ///
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making sandwich with: ".concat(items.join(', '), "."));
}
make_sandwich("ham", "chese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//Exercise 45 //
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("toyota", "corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof", true]));
