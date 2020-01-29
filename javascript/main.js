// let firstName='Adebowale';
// let lastName= 'Badru';


// let fullName = firstName + ' ' + lastName;

// console.log(fullName.length)
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())


// IndexOf() string method
//Run through this name and help with the location or number of the letter in the String
// let myName = fullName.indexOf('a')
// console.log(myName);


// lastIndexOf() display the last value of a text in a string . method returns the index of the last occurrence of a specified text in a string:

// let myName = fullName.lastIndexOf('a');
// console.log(myName)



// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
// let supermanEmail = email.slice(0,8); 
// console.log(supermanEmail);
// let myName = fullName.slice(0,8);
// console.log(myName)




// substring() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// let supermanEmail = email.substr(0,8); 

// let myName = fullName.substr(0,8);
// console.log(myName)




// The replace() method replaces a specified value with another value in a string:
// It takes in two arguments
// let bootCamp = “CechStudio Academy”;
// let camp = bootCamp.replace(‘C’, ‘T’);
// console.log(camp);

// let myName = fullName.replace('A','T');
// console.log(myName)


// const email = 'email@email.com';
// const mail = email.includes('@');
// console.log(mail);
// The includes() method determines whether a string contains the characters of a specified string. This method returns true if the string contains the characters, and false if not. Note: The includes() method is case sensitive.

// let myName = fullName.includes('@');
// console.log(myName)




// Classwork 1
// let a = 20;
// let b = 30;
// let c = 200;

// let x= a + b + c;
// window.alert('The total number is ' + x)









// let firstName = 'Marshall';    
// let lastName = 'Matters'; 
// let middleName = 'Bruce';  

// let fullname = firstName +' ' + lastName + ' ' +middleName;
// console.log(fullname)


// let answer1 = "It's alright";  // Single quote inside double quotes
// console.log(answer1)

// let answer2 = "He is called 'Jackie Chan'";    // Single quotes inside double quotes
// console.log(answer2)

// let answer3 = 'He is called "Johnny"';   // Double quotes inside single quotes




// NUMBER TYPE
// let x = 2; //integer
// let y = 10 //floating point

// let add = y + x
// console.log('Addition of the two variable will be ' + add)


// let x = 2; //integer
// let y = 10 //floating point

// let divide = y / x
// console.log('Division of the two variable will be ' + divide)


// let x = 2; //integer
// let y = 10 //floating point

// let Exponentiation = y ** x
// console.log('Exponentiation of the two variable will be ' + Exponentiation)

// let x = 5; //integer
// let y = 27 //floating point

// let Remainder = y % x
// console.log('Remainder of the two variable will be ' + Remainder)



//Increment
// let x = 2; //integer
// let y = 10 //floating point

// let add = ++x

// console.log('modulus of the two variable will be ' + add)


// Type conversion --MATHS OPERATORS
// let x = '10';
// let y = Number(x);

// let z = true;
// let a = Number(z)


// console.log(y);
// console.log(a)



// let x = '10';
// let y = Number(x);

// let z = false;
// let a = Number(z)


// console.log(y);
// console.log(a);



// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// console.log( parseInt("10"));         // returns 10
// console.log( parseInt("10.33"));      // returns 10
// console.log( parseInt("10 20 30"));   // returns 10

// let x = '10';
// let y = parseInt(x)

// console.log(y);


// let x = '10.33';
// let y = parseInt(x)

// console.log(y);

// let x = '10 20 30';
// let y = parseInt(x)

// console.log(y);



//classwork 2
// const y = 100 / "Apple";  //y will be NaN (Not a Number)
// const a = 20;
// const b = 5;

// const result = a / b;

// const solution = a * b ** 2


// console.log(solution);



// let x = 10;

// ++x
// console.log(x)


// let x = 10;

// x++
// console.log(x)


// let x = 10;

// x--
// console.log(x)



// let x = 10;

// --x
// console.log(x)


// let x = 10;

// x +=10;
// console.log(x)


// let x = 10;

// x /=2;
// console.log(x)


//COMAPRISON OPERATOR
// let x = 10;
// let y = 7;
// let z = '3';



// console.log(x == y);

// console.log(x === y);

// console.log(x == z);

// console.log(x === z)


// > Greater than
// < Less than
// >= Greater than or equal
// != Not equal to 

// let x = 10;
// let y = 7;
// let z = '3';



// console.log(x > y);

// console.log(x < y);

// console.log(x >= y);

// console.log(x != y)


// Logical operators are used to determine the logic between variables or values.

//let x = 5;
// let y = 8;
// let z = '5';



// console.log(x < y && y > x); //true

// console.log(x < y && y < x)  // false

// console.log(x < y || y > x); //true

// console.log(x < y || y < x) 

// console.log(x != y) //true

// (! Not) can also be denoted as console.log(!(x == y))


// TEMPLATE LITERALS
// Template Literals are a new ES2015 / ES6 feature that allows you to work with strings in a novel way compared to ES5 and below.
// Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${result}). The expressions in the placeholders and the text between the back-ticks (` `) get passed to a function. The default function just concatenates the parts into a single string.
// Template string symbols is denoted as (`)
//let likes = 30;
// console.log(`The blog has ${likes} likes`);

// let x = 'Buhari'
// console.log(`the president of Nigeria is ${x}`)


// IF STATEMENT

// if (condition) {  //  block of code to be executed if the condition is true}
// let w = 5;
// let x = 2;

// If (w < y){
// console.log(“w is greater than y”);
// }

// example

// let x = 5
// let y = 4

// if (x < y) {
//     console.log('This is not true')
// } else{
//     console.log('This is right')
// }

// Class work
// Voting system in Nigeria
// 1. declare a variable age
//2. make use of 2 (if else)
//3. have a else expression


//1. You're eligible to vote
//2. You can contest for primaries in your local government
//3. You can contest for presidential post
//4. You need to wait for extra years to vote.

//Solution

// let age = 20
// let yrs = 18
// let range = yrs - age

// if (age < 18 && age > 18 ) {
// console.log('You are eligible to vote')
// } else if ( age > 20) {
//     console.log('You can contest for primaries in your local government')

// }else if('age > 40'){
//     console.log('You contest for Presidential post')
// } 



// let age = 39;

// if (age >= 18 && age < 20) {
//     console.log('You are eligible')
// }
// else if(age >= 20 && age < 40){
//     console.log('You can contest for primary')
// }else if(age >= 40) {
//     console.log('You can run for Presidential')
// } else{
//     console.log('You need to wait for extra years to vote')
// }



// Personal thought
// Less than 1 year You're not eligible
// 1 - 4 years - entitled to 21 days
// 5 years above - 28 days

// let year = 0;
// if (year >=1 && year < 5) {
//     console.log('You are entitled to 21 days')
// }
// else if (year >= 5){
//     console.log('You are entitled to 28 days')
// }
// else{
//     console.log('You are unconfirmed')
// }



// const month = '48'
// switch(month) {
//   case '12':
//     console.log('You are entitled to 21 days');
//     break;
//   case '24':
//      console.log('You are entitled to 21 days');
//     break;
//  case '36':
//  console.log('You are entitled to 21 days');
//     break;
//     case '48':
//         console.log('You are entitled to 21 days')
//         break;
//         case '60':
//         console.log('You are entitled to 28 days')
//         break;
//   default:
//    console.log('This is not available')
// }





// Switch Statement
// const time = '5'
// switch(time) {
//   case '1':
//     console.log('Good morning');
//     break;
//   case '2':
//      console.log('Good Afternoon');
//     break;
//  case '3':
//  console.log('Good evening');
//     break;
//     case '4':
//         console.log('Good night')
//         break;
//         case '5':
//         console.log('Midnight')
//         break;
//   default:
//    console.log('This is not available')
// }


// let x = ['Wale', 'Canice', 'Adebowale', 'Saheed'];

// let y = ['Yomi', 'Chuks', 'Toyinsola', 'Emmanuel'];

// let z = new Array ("Chelsea", "Madrid", "Barca");

// let a = x.concat(y);
// console.log(a);

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === "Chuks") {
//       break;
//     }
//     console.log(a[i]);
//   }







// let i = a;
// do {console.log(`in loop:  ${`); 
// i++;}
// while (i < a.length);






// for (let i = 0; i < a.length; i++){
//     console.log(a[i]);
// }










// for (let i = 0; i < 1000; i++) {
//     console.log(`in loop:  ${i}`);
//  }
//  console.log(`The loop has finished`);




// let a = x.concat(y);
// console.log(a)

// a.splice(2, 2, "Chelsea", "Madrid", "Barca")



// x.splice(2, 0, "Andrew", "Dennis");
// console.log(x);

// let b = a.includes('Canice')
// console.log(b);










// let b = x.join(" | ");
// console.log(b);


// console.log(x);
// console.log(z);

// console.log(x[2]); //Adebowale --- The number/position adebowale falls into
// console.log(y[3]); //Emmanuel
// console.log(z[1]); //madrid
// console.log(y.length);


//Push - Add to an element in an array
// x.push("Andrew");
// y.push("Dennis")
// console.log(x);
// console.log(y)


// //pop --
// x.pop()
// console.log(x)

//Shift
// x.shift()
// console.log(x)





// z.unshift("Juventus");
// console.log(z);

// console.log(z.indexOf("Madrid"))
// console.log(z[2])

// class activity

// let score = 100;
// console.log(score + 1);
// Score = Number(score);
// console.log(score + 1);
// console.log(typeof score);
// let result = Number(10);
// console.log(result);


//LOOP

// For LOOP

//for ([initialExpression]; [condition]; [incrementExpression]){
//code block to be executed
//The loop initialization where we initialize our counter to a starting value. The initialization statement is executed before the loop begins.
//The test statement which will test if a given condition is true or not. If the condition is true, then the code given inside the loop will be executed, otherwise the control will come out of the loop.
//The iteration statement where you can increase or decrease your counter.
//}

// for (let i = 0; i < 1000; i++) {
//     console.log(`in loop:  ${i}`);
//  }
//  console.log(`The loop has finished`);


//A while statement executes its statements as long as a specified condition evaluates to true. 

//while (condition) //{  // code block to be executed}

//     let i = 0; 
//     while (i < 9) {
//    console.log(`in loop:  ${i}`);
//     i++;
// }


// let i = 4;
// do {console.log(`in loop:  ${i}`); 
// i++;}
// while (i < 10);


// BREAK LOOP
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//       break;
//     }
//     console.log(i);
//   }


// for ( let i = 0; i<10;i++){
//     if(i ===5){
//     continue;
//     }
//     console.log(i);
//     }


// for (let i = 5; i < 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`The division reminder of the number ${i} is 0`);
//       break;
//     }
//     console.log(i);
//   }

//   let tv = "sony"; //The variable tv has a global scope. It can be accessed in a function code block or outside.
//   if (true) {
//       let tv = "lg"
//       let phone = "samsung"
//       console.log(`inside code block ${tv} ${phone}`); //lg

//       if (true) {
//           let tv = "Panasonic"
//           let radio = "Philip"
//           console.log(`inside 2nd code block ${tv}`);
//       }
//   }

//   console.log(`outside code block ${tv}`); //sony


// function greet(){
//     console.log("Hello World");
//     window.alert("Hello World");
// }

// greet();


// function Myname(){
//     let firstname = 'Adebowale';
//     let lastname ='Badru';

//     let fullname =firstname  +  lastName;
//     window.alert(fullname)
//     console.log(fullname)
// }

// Myname()


// function square(number) {
//     return number * number;
// }

// console.log(square(2));

// function mySquare(num1, num2){
//     return num1 * num2;
// }
// console.log(mySquare(2, 3));



// Function Expression

// Ways to declare function



// 1
// let square = () => {
//     console.log("Hello World");
// }

// square();

// 2

// let square = function() {
//     console.log("Hello World");
// };
// square();

// 3
// function square(number) {
//     return number * number;
// }

// console.log(square(2));


// let alpha = function(name, time){
//     console.log(`Good ${time} ${name}`);
// }

// alpha ("Emmanuel", "Morning")


// let alpha1 = (name, time) => {
//     console.log(`Good ${time} ${name}`);
// }
// alpha1("Wale", "Afternoon");


// const calcArea = (radius) => {
//     let area = 3.14 * radius ** 2;
//     return area;
// };

// console.log(calcArea(5));


// const calcArea = (radius) => {
//     return 3.14 * radius ** 2;
// };

// console.log(calcArea(5));



// const greet = () => 'hello World';
// const result = greet();

// console.log(result);

// const greet = () => 'hello World';
// greet();

// console.log(greet());


// let ninjas = ["Naruto", "Sasuke", "Neji", "Minato", "Hinata"];
// ninjas.forEach(speak => {
//   console.log(`${speak}`);
// });

// let ninjas = ['Naruto', 'Sasuke', 'Neji', 'Minato', 'Hinata'];
// ninjas.forEach((ninja, index)=> {
//   console.log(index, ninja);
// });

//Object
// let car = {
//     brand: 'Toyota',
//     model: 'Rav4',
//     color: 'white',
//     year: '2019',
//     login: function () {
//         console.log("Kindly login after registration");
//     },

//     logout: function () {
//         console.log("Fill all the field inorder to Login")
//     },

//     blog: ["Emmanuel", "Iyanu"],

//     logblogs: function () {
//         console.log(this.blog);
//     },
//     names: ['Emmanuel', 'Wale', 'Chuks', 'Yomi', 'Falade'],
//     outputnames: function () {
//         this.names.forEach(name => {
//             console.log(`${name}`);
//         });
//     },
//     // clubs: [
//     //     { manager: "Mourinho", club: "Tottenham" },
//     //     { manager: "Klopp", club: "Liverpool" },
//     //     { manager: "Guardiola", club: "Man city" },
//     //     { manager: "Lampard", club: "Chelsea" },
//     //     { manager: "Ole Gooner", club: "Man United" },
//     // ]
   
//     clubs= [{
//         manager: "Mourinho",
//         club: "Tottenham"
//     }, {
//         manager: "Klopp",
//         club: "Liverpool"
//     }, {
//         manager: "Guardiola",
//         club: "Man city"
//     }, {
//         manager: "Lampard",
//         club: "Chelsea"
//     }, {
//         manager: "Ole Gooner",
//         club: "Man United"
//     }]

//     function logStuff() {
//         let manager = [];
//         this.clubs.map((item) => (
//             manager.push(item.manager)
//         ))
//         console.log('manage', manager);
//     };

// logStuff();

 




        // output the list of the manager
        // output the list of the clubs
    
// };

// console.log(`${car.year} ${car.brand} ${car.model} has ${car.color} color`)
// car.outputnames();
// car.logblogs();
// car.login();
// car.logout();
// console.log(`${car.blog[0]} ${car.blog[1]}`);
// console.log(`${car.blog}`);
// console.log(car.blog);
// console.log(car.logStuff)


// let car = {
//     brand: 'Toyota',
//     model: 'Rav4',
//     color: 'white',
//     year: '2019',
//     login: function() {
//         console.log("Kindly login after registration");
//     },

//     logout: function() {
//         console.log("Fill all the field inorder to Login")
//     },

//     blog: ["Emmanuel", "Iyanu"],

//     logblogs: function() {
//         console.log(this.blog);
//     },
//     names: ['Emmanuel', 'Wale', 'Chuks', 'Yomi', 'Falade'],
//     outputnames: function() {
//         this.names.forEach(name => {
//             console.log(`${name}`);
//         });
//     },

//     clubs: [{
//         manager: "Mourinho",
//         club: "Tottenham"
//     }, {
//         manager: "Klopp",
//         club: "Liverpool"
//     }, {
//         manager: "Guardiola",
//         club: "Man city"
//     }, {
//         manager: "Lampard",
//         club: "Chelsea"
//     }, {
//         manager: "Ole Gooner",
//         club: "Man United"
//     }],


    
//     logStuff:function(){
//         let manager = [];
//         let club = [];
//         this.clubs.forEach(item => {
//             manager.push(item.manager);
//             club.push(item.club);
//             console.log(item);
//         })
//         console.log('manager', manager);
//         console.log('club', club);
//     }

// };


// console.log(`${car.year} ${car.brand} ${car.model} has ${car.color} color`)
// car.outputnames();
// car.logblogs();
// car.login();
// car.logout();
// console.log(`${car.blog[0]} ${car.blog[1]}`);
// console.log(`${car.blog}`);
// console.log(car.blog);
// car.logStuff();
// console.log(car.clubs[0,0].manager)
// console.log(car.clubs[0,1].manager)
// console.log(car.clubs[0,2].manager)
// console.log(car.clubs[0,3].manager)
// console.log(car.clubs[0,4].manager)


// console.log(car.clubs[0,0].club)
// console.log(car.clubs[0,1].club)
// console.log(car.clubs[0,2].club)
// console.log(car.clubs[0,3].club)
// console.log(car.clubs[0,4].club)





// let fullname = {
//     firstName: "Yusuf",
//     lastName: "Badru"
// };

// console.log(`${fullname.firstName} ${fullname.lastName}`)

//Filter method
// const shopList = [
//     {name: 'bag' , price: 2000},
//     {name: 'text-book' , price: 5000},
//     {name: 'Writing-materials' , price: 2000},
//     {name: 'Beverages' , price: 5000},
//     {name: 'tuition-fee' , price: 15000},
//     {name: 'LV-Shoe' , price: 3000},
//]

// // const filtershopList = shopList.filter(list => {
// //     return list.name;
// // });
// // console.log(filtershopList);


// const filtershopList = shopList.filter(list => {
//     return list.price <= 3000;
// });
// console.log(filtershopList);


//map method
// const mapshopList = shopList.map(list => {
//     return list.name;
// });

// const nameshopList = shopList.map(list => {
//     return list.name;
// });
// const priceshopList = shopList.map(list => {
//     return list.price;
// });
// console.log(nameshopList);
// console.log(priceshopList)

// let name = (document.getElementById('demo')
// .innerText = nameshopList);
// console.log(name);

// let price = (document.getElementById('aanu')
// .innerText = priceshopList);
// console.log(price)


//QUery selectore Sample
// const nameshopList = shopList.map(list => {
//     return list.name;
// });
// const priceshopList = shopList.map(list => {
//     return list.price;
// });

// console.log(nameshopList);
// console.log(priceshopList)

// document.querySelector("#demo").innerText = nameshopList;

// document.querySelector("#aanu").innerText = priceshopList;





// let name = (document.getElementById('demo')
// .innerText = nameshopList);
// console.log(name);








// forEach
// const nameshopList = shopList.forEach (list => {
//     console.log(list.name);

// })

// let name = (document.getElementById('demo')
// .innerText = nameshopList);
// console.log(name);










// let name = (document.getElementById('demo')
// .innerText = "Emmanuel Iyanu");

// console.log(name);



// console.log(mapshopList);
// console.log(mapshopList[4]);


//Find method

// const findshopList = shopList.find(list => {
//     return list.name === "bag";
// });

// console.log(findshopList);

// // forEach
// const listShopLists = shopList.forEach (list => {
//     console.log(list.name);

// })



//Includes

//First example didn't work.
// const includesshopList = shopList.includes(list => {
//     return list.name === "LV-Shoe";
// });

// console.log(includesshopList);


// let num = [1, 2, 3];
// const num1 = num.includes(2);
// console.log(num1);


// DOM - Document Object Model

// let name = (document.getElementById('demo')
// .innerText = "Emmanuel Iyanu");

// console.log(name);


// querySelector
// const para = document.querySelector("p");
// console.log(para);

// const para1 = document.querySelectorAll("p");
// console.log(para1);

// const para2 = document.querySelector("#alpha");
// console.log(para2);

// const para3 = document.querySelector(".one");
// console.log(para3);

// const para4 = document.querySelector("input");
// console.log(para4);

// const para5 = document.querySelector("#name");
// console.log(para5);



//getElementbyclass

// let main1 = document.getElementsByClassName("main1");
// console.log(main1);

// let main2 = document.getElementsByTagName("h1");
// console.log(main2);



// let para = document.querySelector("#alpha");
// console.log(para.innerText);

// para.innerText = "They cost a fortune";
// console.log(para.innerText);

// para.innerText += " and they have to be paid in dollars";
// console.log(para.innerText);



// let para = document.querySelector(".caption");
// console.log(para.innerText);
// console.log(para.innerHTML);


// para.innerText += " We live by the rules";
// console.log(para.innerText);

// const content = document.querySelector(".content");
// const classList = ['Emmanuel', 'Adebowale', 'Precious', 'Toyinsola', 'Chuks','Yomi', 'Falade', 'Kelechi']

// classList.forEach(list => {
//     content.innerHTML += ` <p> ${list} </p>`;
// });

// Classwork

// const shoplist =document.querySelector(".shoplist");
// const shopList = [
//     {id: 1, name: 'bag' , price: 2000},
//     {id: 2, name: 'text-book' , price: 5000},
//     {id: 3, name: 'Writing-materials' , price: 2000},
//     {id: 4, name: 'Beverages' , price: 5000},
//     {id: 5, name: 'tuition-fee' , price: 15000},
//     {id: 6, name: 'LV-Shoe' , price: 3000},
// ]
// shopList.forEach(list => {
//     shoplist.innerHTML += `<p> ${list.id}. ${list.name} price is ${list.price}</p> `;
// })
// shoplist.setAttribute("style", "color: blue");
// shoplist.style.fontSize = "24px";
// shoplist.style.fontFamily ="sans-serif";
// shoplist.style.fontWeight = "500";
// shoplist.style.textTransform ="Capitalize";



// shopList.forEach(list => {
//     shoplist.innerHTML += `<p>${list.price}</p>`;
// })


//GetelementbyAttribute
// const para = document.querySelector("a");
// console.log(para);
// console.log(para.getAttribute("href"));


// const para = document.querySelector(".content");
// console.log(para.classList);


// para.classList.add("inner-text");
// console.log(para.classList);

// para.classList.remove("content");
// console.log(para.classList);

// para.classList.toggle("content");
// console.log(para.classList);

// para.classList.toggle("content")
// console.log(para.classList);

// variablename = (condition) value1:Value2;  Conditional Ternary Operator
// let age = 16;
// let voteable = (age <= 18) ?
// console.log("since you are older not up to 24, you need to wait for more years")
// :console.log("Since you are older that 24 years old, you can now have access to our service");




//   	// Fetch some server configuration
//       xhrGET('/api/server-config', function(config) {

//         // Fetch the user information, if he's logged in
//         xhrGET('/api/' + config.USER_END_POINT, function(user) {


//         // Fetch the items for the user
//             xhrGET('/api/' + user.id + '/items', function(items) {


//             // Actually display the items here
//             });
//         });
//     });


// //Promise API

//     $http.get('/api/server-config').then(
//         function(configResponse) {
//             return $http.get('/api/' + configResponse.data.USER_END_POINT);
//         }

//     ).then(
//         function(userResponse) {
//             return $http.get('/api/' + userResponse.data.id + '/items');
//         }
        
//     ).then(
//         function(itemResponse) {
//             // Display items here
//         },

//         function(error) {
//             // Common error handling
//         }
//     );
    


//Maths Object

console.log(Math.PI); // In-built method
console.log(Math.SQRT2);  //Square root of 2 in-built method
console.log(Math.sqrt(4));
//We have several math method we can use:
const area = 9.7;
console.log(Math.round(area));
//Round up our area to the nearest whole number
console.log(Math.floor(area));
//Returns the largest integer less than or equal to a number.

console.log(Math.ceil(9.7));
//Returns the smallest integer greater than or equal to a number.
const random = Math.random();
console.log(random);
//This will generate random numbers from 0-1 after each reload
console.log(Math.round(random * 100));
