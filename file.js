console.log("Arithmatic Operator");
let a=10
let b=5
let c=a+b
let c1=a-b
let c2=a-b
let c3=a*b
let c4=a/b
let c5=a%b
console.log(c,c1,c2,c3,c4,c5);
console.log("Relation Operator");
let d=a>b
let d1=a<b
let d2=a!=b
let d3=a>=b
let d4=a<=b
let d5=a==b
console.log(d,d1,d2,d3,d4,d5);
console.log("Assignment Operator");
let e=(a+=b)
let e1=(a-=b)
let e2=(a*=b)
let e3=(a/=b)
let e4=(a%=b)
console.log(e,e1,e2,e3,e4);
console.log("Logical Operator");
let x=1
let y=0
let f=(x&&y)
let f1=(x||y)
let f2=(!x)
console.log(f,f1,f2);
console.log("Bitwise Operator");
let g=(a&b)
let g1=(a|b)
let g2=(a^b)
console.log(g,g1,g2);
console.log("Special Operator");
var z="variable"
console.log(typeof(z));
console.log("Increment/Decrement Operator");
let j=7 
let l=6
let h=(++j)
let h1=(--l)
console.log(h,h1);
console.log("Conditional Operator");
function numCheck(isCorrect){
    return(isCorrect? 10: "num")
}
console.log(numCheck(true));
console.log(numCheck(false));