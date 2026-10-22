/*const username: string = "Marija ";
const userName = "Marija";

let attempts = 0;
attempts = 1;

console.log(userName,username,attempts);


const message = ` user ${username} has ${attempts} login attempts
stampaj`;

console.log(message);

let a = 5;
let result = a++;

console.log (a, result);

let score = 40;

const test = score >= 60 ? "pass" : "fail" ; 

console.log(test);


let age = 20;
if (age > 18) {
    console.log("access allowed")
}
else console.log("access denied");
 */

let score = 6;

if (score >=90){
    console.log("A");
} else if (score >=80){
    console.log("B");
} else if (score >=70){
        console.log("C");
} else if (score >=50){
        console.log("D");
} else   console.log("Fail");


/*let a = 10;
while (a>=0) {
    console.log(a);
    a-=2;
}*/

let sum = 0;
for (let i=2; i<=10; i++){
    if (i%2 === 0) {
    console.log(i);
    sum = sum+i;
    }
}
console.log(sum);
