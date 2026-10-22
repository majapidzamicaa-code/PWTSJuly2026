/*let array = [10,20,30,"TS","Python"]

for (let ele of array){
    console.log(ele)
}


let a=3, b=5;

function add1(a: number, b: number){
    return a+b;
}

const add2 = function(a:number, b:number){
    return a+b;
}
const add3 = (a:number, b:number)=> a+b; 

console.log(add1(a,b),add2(a,b),add3(a,b));
*/

function startTest () {
    console.log(`=== Test started ===
Browser: Chrome
Environment: QA`)
}

startTest()

function getBaseUrl ():string{
   return "https://qa.myapp.com"
}

let url = getBaseUrl();
console.log("Opening"+ url);

function fillField (fildName:string, value:string){
    console.log(`Filling ${fildName} with ${value}`) 
}

fillField("UserName","marija.qa" );
fillField("Password","Test123" );

function calculatePassRate (passed: number, total: number):number {
         return (passed/total)*100
}
const result1 = calculatePassRate(45,60);
console.log(`Pass rate: ${result1}`);