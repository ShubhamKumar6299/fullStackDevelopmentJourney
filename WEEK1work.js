//RadheRadhe
//ques1
/*
function greet(name1){
    console.log("good morning "+ name1);
}
greet("shubham");

//ques2
function greetOnGender(name1, gender){
    if(gender == "male"){
        console.log("good morning "+name1);
    }else{
        console.log("good morning dear "+name1)
    }
}
greetOnGender("shubham","male")
greetOnGender("Shivangi","female")

//ques3
let numbers = [1,2,3,4,5,6,7,8]
function printEven(arr){
    let evenNumbers = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i]%2 == 0){
            // console.log(arr[i]);
            evenNumbers.push(arr[i]);
        }
    }
    console.log(evenNumbers.join(", "))
    // console.log(max(numbers))
    console.log(Math.max(...evenNumbers));
}
printEven(numbers);

//question4//printing all male name given a complex object
let persons =[{
    firstName : "shubham",
    gender : "male"
    },
    {
        firstName : "Krishna",
        gender : "male"
    },
    {
        firstName : "Shivangi",
        gender : "female"
    },
    {
        firstName : "Radhe",
        gender : "female"
    }
]

function printMaleFirstName(persons){
    persons.forEach(person =>{
    //persons.forEach(function(person){})  //incase we want to replace arrow or anonymous function
        if(person.gender == "male"){
            console.log(person.firstName);
        }
    })
}

printMaleFirstName(persons);

//question 5

function reverseArray(arr){
    let start = 0;
    let end = arr.length -1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }   
    console.log(arr.join(' ')) ;
}
reverseArray(numbers);

//question 6
function sum(num1, num2){
    let result = num1 + num2;
    return result;
}
function displayResults(data){
    console.log("the sum of the number is: "+data);
}
function passiveDisplay(data){
    console.log("passive view of the data is: "+data)
}
displayResults(sum(23,34));

//                       ****************    ASYNCHRONOUS FUNCTION  **********************

function fetchData(){
    console.log("requesting data from chatGPT server.......");
    setTimeout(function(){
        console.log("data received from chatGPT")
    },3000);
}
fetchData();

*/

/*function  downloadData(callback){
    setTimeout(function(){
        console.log("data downloaded")
        callback("Downloaded data")
    },1000)
}
function processData(data, callback){
    setTimeout(function(){
        console.log("Data processed ")
        callback("data processed " + data)

    },1000)
}
downloadData(function(downloadedData){
    processData(downloadedData,function(processedData){
        console.log("final data : "+processedData)
    })
})*/

/// resolving promises
// Function to simulate downloading data, now returns a Promise
/*function downloadData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Data downloaded");
            resolve("Downloaded Data");
        }, 1000);
    });
}

// Function to simulate processing the downloaded data, now returns a Promise
function processData(data) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Data processed");
            resolve("Processed " + data);
        }, 2000);
    });
}

// Using Promises to handle the asynchronous operations
downloadData()
    .then(processData)
    .then(function(finalResult) {
        console.log("Final result: " + finalResult);
    })
    .catch(function(error) {
        console.error("An error occurred:", error);
    });

    */

//creating counter in javascript 
/*
function counter(data){
    const countdown = setInterval(function(){
        console.log(data)
        data --;
        if(data <0){
            clearInterval(countdown)
            console.log("countdown complete")
        }
    },1000)
}

counter(30)
*/
//question
/*const startTime = Date.now();
setTimeout(()=>{
    const endTime = Date.now();
    const delay = endTime - startTime;
    console.log(`Actual delay :${delay} `)
},1000)
*/

//. Create a terminal clock (HH:MM:SS)
/*function displayClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`)
}

setInterval(displayClock, 1000);
displayClock();
*/

//                     ********************  loops and functions ****

/*function square(a){
    return a*a;
}
function sumofsomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

setTimeout(()=>{
    console.log("hello world")
},1000)
console.log(sumofsomething(2,3,square));
*/


//                     ***************************  Asynchronous function ******
//fs.readFie
/*const fs  =require('fs')
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})
console.log("This is a message")
*/

//Promises
/*function findSum(n){
    let ans = 0;
    for(let i = 0;i<n;i++){
        ans = ans+i;
    }
    console.log(ans);
}
function findSumTill100(){
    return findSum(100);
}
setTimeout(findSumTill100,1000)
console.log("hellllo worldddd Radhe Radhe")
*/

/*const fs = require('fs')
function kiratReadFile(cb){
    
    fs.readFile("a.txt","utf-8",function(err,data){
        
        cb(data);
    })
}

function onDone(data){
    console.log(data);
}

kiratReadFile(onDone)
*/

//                            PROMISES
/*const fs = require('fs')
function kiratReadFile(){
    return new Promise(function(resolve,reject){
        console.log("before reading file")
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
}
function onDone(data){
    console.log(data);
}
kiratReadFile().then(onDone);
*/


/*let p = new Promise(function(resolve){
    resolve("hi there")
})
p.then(function(){
    console.log(p)
})
    */


/*function kiratAsyncFunction(){
    return new Promise(function(resolve){
        
        resolve("hii there")
        
    })
    
}
kiratAsyncFunction().then(function(data){
    console.log(data)
})
    */


//creating an async fn
/*function kiratAsynFunction(){
    return new Promise(function(resolve,reject){
        resolve("Radhe Krishna help me out")
    })
}
kiratAsynFunction().then(function(data){
    console.log(data)
})
    */

//****************************   Async Await */
/*function kiratAsyncFunction(){
    return new Promise(function(resolve,reject){
        resolve("Krishna please please help me out")
    })
}
async function main(){
    let data =  await kiratAsyncFunction();
    console.log(data)
}
main()
*/


/*function kiratAsyncFunction(){
    return new Promise(function(resolve){
        resolve("Radhe Radhe Radhe Barshane wali Radhe")
    })
}
async function main(){
    let data  = await kiratAsyncFunction();
    console.log(data)
}
main()
*/

//callback syntax
/*function kiratAsyncFunction(callback){
    
    callback("hii there")
    console.log("jai shree krishna radhe radhe")
    
}
async function main(){
    kiratAsyncFunction(function(value){
        console.log(value)
    })
}
main()
*/


// function displayClock(){
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2,'0');
//     console.clear();
//     console.log(`${hours}:${minutes}:${seconds}`)
// }

// setInterval(displayClock, 1000);
// displayClock();


function displayClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0')
    const minutes  = String(now.getMinutes()).padStart(2,'0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    console.clear() 
    console.log(`${hours}:${minutes}:${seconds}`)
    // const mystop = setInterval(()=>{
    //     clearInterval(myInterval)
    // },5000)
    // mystop;
    
}
const myInterval = setInterval(displayClock,1000)
displayClock()