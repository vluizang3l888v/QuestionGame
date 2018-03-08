// JQ loads here //
$(document).ready(function() {




//TIMER FAILED :( 
//TIMER FAILED :( 
//TIMER FAILED :( 
// Countdown timer
//what is p5?
//opening global variable. 
var counter = 0;
var timeleft = 300;
//closing global variable

//seperate function.
function convertSeconds(s) {
var min = floor (s / 60);
var sec = s % 60; //%moduLus operater% gives me the remainder of division so that's number of seconds left. 
return nf(min,2 + ':' + nf(sec,2) 

// I dont wan't to get a decimal result. 
//floor is an opertation to a number that takes off the decimal place. 

)}

function setup(); {
    noCanvas();

    var params = getURLParams();
    if (params.minute) {
    var min = params.minute;
    timeleft = min & 60;
    }
// params help you edit where you type google.com and change the timer. 
    //P5 MAKES CANVAS BY DEFAULT.
    //this is not p5. 
    var timer44 = select('#timer44');
    timer44.html(convertSeconds(timeleft - counter));

    //had to make timeIt function, it's on setInterval but I have to actually make the function here. 
    function timeIt() {
        counter++;
        timer44.html(convertSeconds(timeleft - counter)) //just copied this from above, but changed '0' to counter!!!
        }
//i don't get convertSeconds!!!
    setInterval(timeIt,1000);
    //this setInterval is saying I want a certain event to happen every so often.!!!
//nf(num),[left],[right])
//nf == number of digits to the left of decimal and to the right.
//nf means I always want 2 digits.  

}
// TIMER FAILED :( 
// TIMER FAILED :( 
// TIMER FAILED :( 





//regular timer
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

myTimer();
//regular timer





//JUST A REGULAR FUNCTION. 
function onSubmit(){
alert("its working"); 
}

onSubmit();
//JUST A REGULAR FUNCTION 







//JUST A REGULAR FUNCTION.
function car();{
alert("Welcome to the Quiz")
    
car();
//JUST A REGULAR FUNCTION. 











//RULES not working. 
function onSubmit(){
var score=0;
var numOfQuestions = 5;
var ansArr = ['a', 'c', 'c', 'e', 'd'];

var q1 = document.forms['quiz']['q1'].value;
var q2 = document.forms['quiz']['q2'].value;
var q3 = document.forms['quiz']['q3'].value;
var q4 = document.forms['quiz']['q4'].value;
var q5 = document.forms['quiz']['q5'].value;

for(var i = 1; i <=numofQuestions; i++){
if (eval('q' + 1) == ''){
    alert("You missed question number " + i);

}

for(var i = 1; i <=numOfQuestions; i++){
    if(eval('q' + i) == ansArr[i -1]){
        score++;
    }
var results = document.getElementById('results')
results.innerHTML="<h2> You Scored" + SCORE + " points out of " + numOfQuestions + "</h2>"
alert('You scored ' + score + ' out of ' + numOfQuestions)
}
}
}
//rules not working. 



}); //JQ ends here. 


