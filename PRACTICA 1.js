let num1 = Math.floor(Math.random()*20)
let num2 = Math.floor(Math.random()*20)
let num3 = Math.floor(Math.random()*20)
console.log(num1, num2, num3);

if(num1<num2 && num1<num3){
    console.log("El numero menor es: " + num1);
}
else
if(num2<num1 && num2<num3){
    console.log("El numero menor es: "+num2);
}
else
if(num3<num1 && num3<num2){
    console.log("El numero menor es: " + num3);
}
