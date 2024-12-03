function studentGrade(studentMarks) {
    let grade = "";
    console.log(`m is ${studentMarks} `);

    if (studentMarks>79) {
        grade= "A";
        console.log(`Grade is ${grade} `);
    }else if(studentMarks>=60&&studentMarks<=79){
        grade= "B";
        console.log(`Grade is ${grade} `);
    }else if(studentMarks>=49&&studentMarks<=50){
        grade= "C";
        console.log(`Grade is ${grade} `);
    }
    else if(studentMarks>=40&&studentMarks<=49){
        grade= "D";
        console.log(`Grade is ${grade} `);
    }else if(studentMarks<40){
        grade= "E";
        console.log(`Grade is ${grade} `);
    }
    
    console.log(`Grade student attained is ${grade} .`);
}

let x =studentGrade(64)
console.log(x);