var readlineSync = require("readline-sync")
var chalk = require('chalk')
var score=0;

console.log(chalk.red("Welcome to my THE OFFICE quiz\n"));

var userName = readlineSync.question("What is your good good name?");
console.log("\nWelcome welcome, they say Hello Team "+ chalk.green(userName));
console.log("\nWe will keep the rules short-ified. HAHA");
console.log("\n------------------------------\nYour score will +1 if you answer right, and wrong gives -1 weeble-wabba-dubbaa-dubbb")
function play(question, answer){
var userAnswer = readlineSync.question(question);
if (userAnswer === answer){
  console.log(chalk.green("CORRECT-fiying!!!"));
  score++;
  console.log(chalk.red("Score :: "+score));
}
else{
  console.log(chalk.yellow("WRONG-ilicious :( "))
  score--;
  console.log(chalk.red("Score :: "+score));
}
}

var questions = [{
  question: "\nWho was Pam dating in the first 3 seasons? ",
  answer: "Roy"
},{
  question: "\nWho is Dwight's full name? ",
  answer: "Dwight K. Schrute"
},{
  question: "\nWho is Jim most annoyed with in the office?",
  answer: "Dwight Schrute"
},{
  question: "\nWho is Michael's No.2 in S03?",
  answer: "Jim"
}];

for(var i = 0;i < questions.length ; i++){
  var currentQ = questions[i];
  play(currentQ.question,currentQ.answer);
}
console.log(chalk.green('your current score is : ' + score));
console.log ('------------------------------------')