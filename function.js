let mark=prompt("what is you exam number")
if(mark >=90 && mark <=100){
    alert("Grade A+")
}
 else if(mark >=80 && mark <90){
    alert("Grade A")
}
else if(mark >=70 && mark <80){
    alert("Grade B")
}
else if(mark >=60 && mark <70){
    alert("Grade C")
}
else if(mark >=50 && mark <60){
    alert("Grade D")
}
else if(mark <50){
    alert("Fail")
}
else{
    alert("pleas give me correct number")
}

alert("section 2 ")

let attendance=prompt("Attandance")
let assignment=prompt("Assignment Answer yes or no" )
let marks=prompt("you total number in your exam")

if((attendance >=80 && assignment ==="yes") && marks>=80){
    alert("you are good student")
}
if((attendance >=50 && attendance <80 || assignment ==="yes") && marks >=50 && marks<80){
    alert("you are Average student")
}
else{
    alert("Sorry attendance min 50%  and marks min 50% student classroom allowed")
}
