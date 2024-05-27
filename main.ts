// 2.personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let Hello = "Sindhia";
console.log(`Hello ${Hello}, would you like to learn some Python today`)

//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//
let person_name = "abubakar";
console.log(person_name.toLocaleLowerCase());
console.log(person_name.toLocaleUpperCase());
console.log(person_name.charAt(0));
console.log(person_name.charAt(0).toLocaleUpperCase() + person_name.slice(1));
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks//
console.log('Roy T.Bennett once said,"Do what is right not what is easy nor what is popular"');

// 5 .Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Roy T.Bennet";
let quote = " Do what is right not what is easy nor what is popular";
console.log(`${famous_person} once said,${quote}`);

//6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = `\n\t ATIF ASLAM \t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

//7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.//
//8.You should create four lines that look like this//
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);

//9 .Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber: number = 8
console.log(`My favorite number is ${favoriteNumber}`);

//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// My name is Sindhia 
// Date: 18/03/2024
// this program will  run simple code just like hello world
console.log("hello world simple program");

//11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.//

let friend: string[] = ["rehma", "faraz", "shafiqa"];
console.log(friend[0]);
console.log(friend[1]);
console.log(friend[2]);

//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let names: string[] = ["rehma", "faraz", "shafiqa"];
let message: string = "would you like to learn typescript";
for (let i = 0; i < names.length; i++) {
    console.log(message + names[i]);
}

//exercise 13//
let transportation: string[] = ["civic", "bike", "landcruiser", "tesla"];
for (let i = 0; i < transportation.length; i++) {
    console.log('i would like to own a' + transportation[i]);
}

// exercise 14//
let guest_list: string[] = ["farhan", "ibad", "bari"];
for (let i = 0; i < guest_list.length; i++) {
    console.log('respected Sir/Mam' + guest_list[i] + ',\nwe invited you on dinner tommorrow.\nThank youn\n')
}
export { guest_list };

//exercise 15 //
let not_present: string = "farhan";
let new_guest: string = "aijaz";
for (let i = 0; i < not_present.length; i++) {
    console.log('respected Sir/Mam' + guest_list[i] + ',\nwe invited you on dinner tommorrow.\nThank youn\n')
}
console.log('mr . ${not_present}', ' will not coming tommorrow dinner');

//exercise 16 //
guest_list.unshift("akbar", "obaid", "asif");
for (let i = 0; i < not_present.length; i++) {
    console.log('respected Sir/Mam' + guest_list[i] + ',\nwe invited you on dinner tommorrow.\nThank youn\n')
}
//exercise 17 //
console.log("\nunfortunatly we can not arrange big table,only two people allow.");
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log('sorry Sir/madam.${remove_guest} you are not invited for dinner,');

}
for (let i = 0; i < not_present.length; i++) {
    console.log('respected Sir/Mam' + guest_list[i] + ',\nwe yes youre still  invited you on dinner tommorrow.\nThank youn\n');
}
guest_list.splice(0, 2)
console.log(guest_list);

//exercise 18 //
let places: string[] = ["maldives", "red sea", "denmark", "russia"]
console.log("origanl +, places");

//print your array in alphabetical order without modifying the actual list
console.log('copy' + [...places].sort())
console.log('original :' + places);
console.log('copy' + [...places].sort().reverse());
console.log('copy' + [...places].sort().reverse());
console.log('original :' + places.sort());
console.log('original' + places.sort().reverse());

//exercise 19 //
// importing

//exercise 20 //
let languages: string[] = ["sindhi", "english", "urdu", "balochi", "pushto"]
console.log("list of languages:")
for (let top of languages) {
    console.log(top)
}

//exercise 21 //
interface item {
    name: string
    price: number
}
// create two objects
const book: item = {
    name: "ESSENTIAL TYPESCRIPT",
    price: 450
}
const apple: item = {
    name: "apple",
    price: 200
}
console.log(`book name: ${book.name},price :${book.price}`)
console.log(`apple name: ${apple.name},price :${apple.price}`)

//exercise 22 //
let array: (string | number)[] = ['babar', 'humayun', 3, 5, 4, "javeria"];
console.log(array[5]);
console.log(array[1]);
console.log(array[2]);

//exercise 23 //
let car: string = "subaru";

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
console.log(car < 'subaru');//False (lexicographic comparison)

//Test 6: greather than comparison(False)
console.log("is car > 'subaru'? I predict False");
console.log(car > 'subaru'); // False (lexicographic comparison)

//Test 7: less than and equal1 comaprison (True)
console.log("is car <='subaru'?I predict True");
console.log(car <= 'subaru');//True

//Test 8: greater than or equal comparison(True)
console.log("is car >= 'subaru'? I predict True");
console.log(car >= 'subaru');//True

//Test9: Checking truthness (True)
console.log("is car?I predict True");
console.log(car);//true(non empty string is truthy)

//Test 10:Chceking falseness (False)
console.log("is !car?I predict False");
console.log(car);//False (negation of a truthy value)

//Exercise 24 //
let cars: string = 'subaru';
let age: number = 25;
let numbers: number[] = [1, 2, 3, 4];

//string Test***


//test 1 :Equality (True)
console.log("is car == 'subaru'? I predictt True");
console.log(car == 'subaru'); //True (case sensitive)

//test 2  strict enquality (False)
console.log("is car ==='subaru'?I predict False");
console.log(car === 'subaru'); //false (case sensitive)

//test 3 inquality(True)
console.log("is car !='toyota'?I predict True");
console.log(car != 'toyota');//True

//test 4 :Inequality(False)
console.log("is car !=='toyota'?I predict false");
console.log(car !== 'toyota');

// Lower case function tests *****

//Test 5: lower conversion (True)
console.log("is car.toLowercase() == 'subaru'?I prdecit True");
console.log(car.toLocaleLowerCase() == 'subaru');//True coversion to lower case

//test 6: lower case conversion (False)
console.log("is car === tolowercase()?I predict false");
console.log(car === car.toLocaleLowerCase()); // False conversion to lower case

//***********Numeric Test*************
//Test 7:equality (True)
console.log("is age ===25?I predict True");
console.log(age === 25);//True

//test 8: equality (False)
console.log("is age !=25?I predict False");
console.log(age != 25);//False

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
let alien_color: string = "green";

if (alien_color == "green") {
    console.log("The player just earned 5 point.");
}
alien_color = "Red";

if (alien_color == "green") {
    console.log("the player earned 5 point");
}

//exercise 26 //
let alien_color2: string = "green";

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
let alien_color3: string = "green";

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
let age_: number = 25;

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
let favfruits: string[] = ['apple', 'banana', 'mango', 'orange']

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
let users: string[] = ['saba', 'rehma', 'fatima', 'taha', 'admin']
for (let user of users) {
    if (users === users) {
        console.log("Hello admin, would you like to see a status report?.");
    }
    else {
        console.log(`hello ${user},thankyou for logging again.`);
    }
}
//Exercise 31 //
let usersNew: string[] = ['saba', 'rehma', 'fatima', 'taha', 'admin']
if (usersNew.length === 0) {
    console.log("we need to find some user!");
}
else {
    usersNew = [];
    console.log("all user have been removed" + usersNew.length);
}

//Exercise 32 //
let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"]
let new_users: string[] = ["nida", "user6", "fatima", "admin", "affan"]

new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser}is availabe.`);
    };
})
//Exercise 33 //
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for loop
for (let i = 0; i < myNumbers.length; i++) {
    // now we use conditions
    if (myNumbers[i] == 1) {
        console.log(`${myNumbers[i]}st`);
    } else if (myNumbers[i] == 2) {
        console.log(`${myNumbers[i]}nd`);

    } else if (myNumbers[i] == 3) {
        console.log(`${myNumbers[i]}rd`);

    } else if (myNumbers[i] == 4 && myNumbers[i] <= 9) {
        console.log(`${myNumbers[i]}th`);

    }
    //Exercise 34 //
    let myPizza: string[] = ['chese pizza', 'creamy pizza', 'vegetarian pizza'];
    for (let i = 0; i < myPizza.length; i++) {
        console.log(myPizza[i]);
    }
    for (let i = 0; i < myPizza.length; i++) {
        console.log(`i like to eat ${myPizza[i]}`);
    }
    console.log(
        `\nI really like to eat Pizzas.Pizza come in variety of flavours and tooping, allowing individuals to customers to it to their liking`
    );

}

//Exercise 35 //
let animal: string[] = ['dog', 'cat', 'rabbit'];

animal.forEach(animal => {
    console.log(`A ${animal} would make a great pet`);
});
console.log("Any of these animals world make a great pet!");

//Exercise 36 //
function make_shirt(size: string, message: string) {
    console.log(`making a ${size} T shirt with the message "${message}"printed on it.`);
}
make_shirt("medium", "code is life");

//Exercise 37 //
function make_shirtty(size: string = "large", message: string = "i love typescript ") {
    console.log(`making a ${size}T shirt with the message "${message}"printed on it`);
}
make_shirtty(); //default large and message
make_shirtty("medium"); //default message,medium siza
make_shirtty("small", "dive into coding"); //custom message, small size

//Exercise 38 //
function describe_city(nameOfCity: string, country: string = "Pakistan") {
    return `${nameOfCity} is in ${country}`;
};
// 3 cities
let city1 = "Karachi";
let city2 = "Islamabad";
let city3 = "Lahore";
let city4 = "hyderabad";
let city5 = "dubai";

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

//Exercise 39 //
function city_country(city: string, country: string) {
    return `$${city},${country}`
}
city_country("Karachi", "Pakistan");

let mycities = city_country("Karachi", "Pakistan");
console.log(mycities);

console.log(city_country("dubai", "UAE"));
console.log("london", "United kingdom");
console.log("Riyaz", "Saudi Arabia");

//Exercise 40 //
function myAlbum(artistName: string, albumTitle: string) {
    return { artistName, albumTitle }

}
let album1 = myAlbum("Ali", "Rang-e-mohabbat");
let album2 = myAlbum("Mahad", "Roshan andhera");
let album3 = myAlbum("Ayaz", "Mausam -e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);

//Number of tracks //
function myAlbum2(artistName: string, albumTitle: string, Numberoftracks?: number) {
    return { artistName, albumTitle, Numberoftracks }

}
let album4 = myAlbum2("Ali", "Dil Hai", 30);
let album5 = myAlbum2("Mahad", "Ajeeb Kahani", 55);
let album6 = myAlbum2("Affan", "Typescript ki codding", 77);

console.log(album4);
console.log(album5);
console.log(album6);

//Exercise 41 //
let magicians: string[] = ["Dynamo", "Chris", "David"];
function Show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);

    })
}
Show_magicians(magicians);

//Exercise 42 //
let magicianss: string[] = ["Dynamo", "Chris", "David"];
function make_great(magicianss: string[]) {
    for (let i = 0; i < magicianss.length; i++) {
        magicians[i] = magicianss[i] + " the great";


    }
}
make_great(magicianss);
Show_magicians(magicianss);

//Exercise 43 //
let magiciansss: string[] = ["David", "Alice", "Chris"];
function make_greatt(magiciansss: string[]): string[] {
    let greatMagiciansss: string[] = [];
    magicianss.forEach(magician => {
        greatMagiciansss.push(`${magiciansss}The great`);
    });
    return greatMagiciansss;
}
let greatmagician = make_greatt(magiciansss.slice());
console.log("original magicians:");
Show_magicians(magicians);
console.log("great magicians:");
Show_magicians(greatmagician);

//Exercise 44 ///
function make_sandwich(...items: string[]) {
    console.log(`making sandwich with: ${items.join(', ')}.`);

}
make_sandwich("ham", "chese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

//Exercise 45 //
function make_car(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car: any = { manufacturer, model };

    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("toyota", "corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("ford", "fiesta", ["color", "blue"], ["sunroof", true]));


















