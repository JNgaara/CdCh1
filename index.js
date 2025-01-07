// QUESTION 1 FUNCTION
function studentGrade(studentMarks) {
    let grade = "";
    //var output = '';

    if (studentMarks>79) {
        grade= "A";
    }else if(studentMarks>=70&&studentMarks<=79){
        grade= "B";
    }else if(studentMarks>=60&&studentMarks<=69){
        grade= "c";
    }else if(studentMarks>=50&&studentMarks<=59){
        grade= "D";
    }
    else if(studentMarks>=40&&studentMarks<=49){
        grade= "E";
    }else if(studentMarks<40){
        grade= "F";
    }

    console.log(`Grade student attained is ${grade} .`);
}
// TESTING QUESTION 1
studentGrade(70);   
studentGrade(80);   
studentGrade(60);   
studentGrade(50);   
studentGrade(40);   
studentGrade(39);
studentGrade(69);
studentGrade(59);
studentGrade(49);
studentGrade(20);

console.log(`\n ---------------------------------------------------------------------------------------------------------- \n`);
//----------------------------------------------------------------------------------------------------------
//QUESTION 2 FUNCTION
var licensePoints= 0;
var speedLimit = 70;
var message ='';

function speedDetector(carSpeed){
    licensePoints=0;
    if (carSpeed<=70) {
        message = `Ok`;    
    }else if(carSpeed>70&&carSpeed<=75){
        licensePoints+= 1;
        message = `Points: ${licensePoints} `

    }else if(carSpeed>=speedLimit+5 &&carSpeed<=speedLimit+10){
        licensePoints+= 2;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<=speedLimit+15 &&carSpeed>=speedLimit+10){
        licensePoints+= 3;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<=speedLimit+20 &&carSpeed>=speedLimit+15){
        licensePoints+= 4;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<=speedLimit+25 &&carSpeed>=speedLimit+20){
        licensePoints+= 5;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<=speedLimit+30 &&carSpeed>=speedLimit+25){
        licensePoints+= 6;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<=speedLimit+35 &&carSpeed>=speedLimit+30){
        licensePoints+= 7;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<=speedLimit+40 &&carSpeed>speedLimit+35){
        licensePoints+= 8;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<=speedLimit+45 &&carSpeed>=speedLimit+40){
        licensePoints+= 9;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<=speedLimit+50 &&carSpeed>=speedLimit+45){
        licensePoints+= 10;
        message = `Points: ${licensePoints} `

    }else if(carSpeed<speedLimit+60 &&carSpeed>=speedLimit+50){
        licensePoints+= 11;
        message = `Points: ${licensePoints} `

    }
    else if(carSpeed>=speedLimit+60 ){
        licensePoints+= 12;
        message = `License Suspended `

    }

    console.log((message));

    return message;
}

//TESTING QUESTION 2 FUNCTION
speedDetector(70);  speedDetector(75);  speedDetector(80);  
speedDetector(85);  speedDetector(90);  speedDetector(95);  
speedDetector(100); speedDetector(105); speedDetector(110); 
speedDetector(115); speedDetector(120); speedDetector(125);     
speedDetector(129);     speedDetector(130);