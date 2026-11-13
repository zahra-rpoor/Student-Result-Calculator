const studentName = "Sarah"
const studentAge = 19
const mathMarks = 90
const englishMark = 99
const computerMark = 92


// arithmetic operations

const totalMarks = mathMarks + englishMark + computerMark
const averagemark = totalMarks / 3
const highestpossible_mark = 300
const remainingMarks_need = highestpossible_mark - totalMarks

console.log(`student Name :${studentName}, age :${studentAge}`);
console.log(`Math Marks : ${mathMarks}, English Marks : ${englishMark}, Computer Marks: ${computerMark}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Mark: ${averagemark}`);
console.log(`Highest Possible Mark: ${highestpossible_mark}`);
console.log(`Remaining Marks Needed: ${remainingMarks_need}`);



// comparision
console.log(studentAge > 18)
console.log(mathMarks > 80)
console.log(englishMark === 100)
console.log(computerMark != 50)


// conditional statment 
if (averagemark >= 90 && averagemark <= 100) {
    console.log("A");
} else if (averagemark >= 80 && averagemark < 90) {
    consol.log("B");
} else if(averagemark >= 70 && averagemark <80){
    console.log("C");

}else if (averagemark >= 60 && averagemark < 70){
    coonsole.log("D");

}else if (averagemark >= 50 && averagemark < 60){
    console.log("E");

}
else {
    console.log("below 50");
}