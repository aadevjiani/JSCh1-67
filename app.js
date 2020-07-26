// Assignment Chapter 1-67 :: Ali Abbas Devjiani

// Assignment Chapter 1-20 GitHub Link
// https://github.com/aadevjiani/Assignment5-JS.git

// Assignment Chapter 21-38 GitHub Link
// https://github.com/aadevjiani/Assignment6-JS.git

// Assignment Chapter 39-67 - Code below

//Chapter 38-42 or 38-44 : Task No. 1
// Functions, Switch, Statements, While .. Do-While Loops

// var a = +prompt("Enter a Number For Base")
// var b = +prompt("Enter a Number For Power")
// function power(a,b){
//     document.write("The value of " +  a + " raised to " + b + " is " + Math.pow(a,b))
// }

// power(a,b)

//Chapter 38-42 or 38-44 : Task No. 2

// var year = +prompt("Enter a year to  check is a Leap Year or not ?");
// function leapYear(){
//   if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//       document.write(year + " is a leap year")
//   }
//   else{
//       document.write(year + " is not a leap year");
//   }
// }
// leapYear()

//Chapter 38-42 or 38-44 : Task No. 3

// function areaOfTriangle(a,b,c,s){
//     var area = (s*(s - a)*(s - b)*(s - c))
//     document.write("The Area of Triangle is : " + area)
    
// }

// function semiPerimeter(){
//     var a = +prompt("Enter the length of First Side of Triangle : ")
//     var b = +prompt("Enter the length of Second Side of Triangle : ")
//     var c = +prompt("Enter the length of Third Side of Triangle : ")
//     var s = (a + b + c)/2
//     areaOfTriangle(a,b,c,s)
// }
// semiPerimeter()

//Chapter 38-42 or 38-44 : Task No. 4

// function mainFunction(){
//     var sub1 = +prompt("Enter the marks of First Subject : ")
//     var sub2 = +prompt("Enter the marks of Second Subject : ")
//     var sub3 = +prompt("Enter the marks of Third Subject : ")
//     average()
//     percentage()
//     document.write("Marks in First Subject is : " + sub1 + "<br/>")
//     document.write("Marks in Second Subject is : " + sub2 + "<br/>")
//     document.write("Marks in Third Subject is : " + sub3 + "<br/>")
//     document.write("<br/><br/>")
//     document.write("Average Marks obtained are : " + average)
//     document.write("<br/><br/>")
//     document.write("Percentage Obtained is : " + percentage + "%")
    
//     function average(){
//          average = (sub1+sub2+sub3)/3
//     }
//     function percentage(){
//         percentage = ((sub1+sub2+sub3)/300)*100
//     }
    


// }

// mainFunction()


//Chapter 38-42 or 38-44 : Task No. 5

// var word="findindexof"
// var index = word.indexOf('i')
// document.write("Index of i is "+ index)

//Chapter 38-42 or 38-44 : Task No. 6

// var sentence = prompt("Enter a sentence to remove vowels from the sentence : ")
// sentence = sentence.replace( /[aeiouAEIOU]/g, 'X' )
// document.write(sentence)

//Chapter 38-42 or 38-44 : Task No. 7

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
document.write("Number of occurences are "+findOccurrences());


// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter.toLowerCase()) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
// document.write(findOccurrences());

// // Task No 08

// const calculateMeters= num=> num*1000;
// const calculateCentiMeters= num=> num * 1000 * 100;
// const calculateFeet= num=>  num * 3280.84;
// const calculateInches= num=> num * 39370.08;
// function calculateMain(){
//     var num = prompt("Enter distance in kilometers: ");
//     document.write('Distance in KM ' + num + "<br>" + 'In meters' + calculateMeters(num) + "<br>"  + 'In Centimeter' + calculateCentiMeters(num) + "<br>"  + 'In Feet' + calculateFeet(num) + "<br>"  + 'In Inches' + calculateInches(num))
// }
// calculateMain();

// // Task No 09

// function main()
// {

//     var emps = +prompt("Enter Number of Employees");
//     var count = 1, working_hours, over_time;
//     var over_time_pay;

//     while(count<=emps)
//     {
//         working_hours = +prompt("Enter the working hours of employee no: "+ count);
//         if(working_hours>40)
//         {
//             over_time = working_hours - 40;
//             over_time_pay = over_time * 12.00;
//             console.log(`Employee No ${count} overtime pay is ${over_time_pay}`);
//         }
//         else
//             console.log("You have to work for more than 40 hours to get over time pay\n");

//         count++;
//     }
// }
// main();

// // Task No 10

// function mainCurrency()
// {
// 	var amount = +prompt("Please input amount for withdraw : ");
// 	//calculations
// 	console.log("\n\nRequired notes of Rs. 100  :  ", Math.floor(amount / 100));
// 	console.log("\n\nRequired notes of Rs. 50   :  ",  Math.floor((amount % 100) / 50));
// 	console.log("\n\nRequired notes of Rs. 10   :  ",  Math.floor((((amount % 100) % 50) / 10)));
// 	console.log("\n\nAmount still remaining Rs. :  ",  Math.floor((((amount % 100) % 50) % 10)));

// }
// mainCurrency();
