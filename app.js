//         CHAPTER 17 to 20
//        QUESTION NO 1

/*var emptyArray = [[],[],[]]
document.write(emptyArray)*/

//        QUESTION NO 2

// var emptyArray = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// document.write(emptyArray[0] + "<br>" + emptyArray[1] + "<br>" + emptyArray[2] );

// var emptyArray2 = [
// [0,1,2,3] ,
// [1,0,1,2],
// [2,1,0,1]
// ]
// console.log(emptyArray2);

//        QUESTION NO 3

// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>")
// }

//        QUESTION NO 4

// var firstValue = +prompt("enter a first digit")
// var secondValue = +prompt("enter a second digit")
// for (var i = 1; i <= secondValue; i++) {
//     document.write(firstValue + " x " + i + " = " + firstValue * i + "<br>")
// }

//        QUESTION NO 5

// var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"]
// for (var i = 0; i < fruits.length; i++) {
//     document.write(` ${fruits[i]} <br> `)
// }
// for (var j = 0; j < fruits.length; j++) {
//     document.write(`Element at index ${j} is ${fruits[i]}<br>`)
// }

//        QUESTION NO 6

// document.write("<b>Counting: </b>")
// for (var i = 1; i <= 15; i++){
//     document.write(i + " " )
// }

// document.write("<b>Reverse Counting: </b>")
// for(var i = 10; i >= 1; i--){
//     document.write(i + "," )
// }

// document.write("Even: ")

// for (var i =0; i <= 20; i=i+2){
//     document.write(i + ",")
// }

// document.write("Odd: ")
// for(var i = 1; i <= 19; i=i+2){
//     document.write(i + ",")
// }

// document.write("Series: ")
// for(var i = 2; i <= 20; i=i+2){
//     document.write(i + "k, ")
// }


//       QUESTION NO 7


// var userInp = prompt("Welcome to ABC BAKERY, What do you want to order sir/maam?");
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var found = false; 
// for(var i=0; i<arr.length; i++){
//     if(userInp === arr[i]){
//         document.write(`${userInp} is <b>Available</b> at ${i} in our bakery`)
//         found = true;
//         break;
//     }
// }

// if(found == false){
//     document.write(`We sre sorry.${userInp} is <b>Not Available</b> at our bakery`)
// }

//       QUESTION NO 8

// var mixNum = ["24","53","78","91","12"] 
// var largeNum = "91";
// for(var i = 0; i <= mixNum.length; ){
        /////// if(mixNum[i] < largeNum){
//         document.write(mixNum[i] +"The largest number is " + largeNum)
//     ////// }
// }

// yeh code nh chal rhaaaa

// var arr = [24,53,78,91,12];
// document.write(`Array Itemns: ${arr} <br>`)
// var largeNum = arr[4];
// for (var i = 0; i < arr.length; i++) {
    
//     if ( largeNum > arr[i] ) {
//         arr[i] = largeNum
//     }
// }

// document.write(`The Largest number is ${largeNum}`)

// var arr =[24, 53, 78, 91, 12];
// document.write(`Array items: ${arr} <br>`)
// var largest = Math.max(...arr)
// document.write(`The largest number is ${largest}`)

//       QUESTION NO 9

// var arr =[24,53,78,91,12]
// var smallest = Math.min(...arr)
// document.write(`Array items:${arr} <br>The smallest number is ${smallest}`)

// var arr = [24,53,78,91,12];
// document.write(`Array Itemns: ${arr} <br>`)
// var smallestNum = arr[4];
// for (var i = 0; i < arr.length; i++) {
    
//     if ( smallestNum > arr[i] ) {
//         arr[i] = smallestNum
//     }
// }

// document.write(`The smallestst number is ${smallestNum}`)


//       QUESTION NO 10

// var range = 5;
// for (var i = 1; i < 21 ; i++ ){
//     document.write(range *i + ", ")
// }
// document.write(`range${i} <br>`)







