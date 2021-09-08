var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

var questions = [
    {
        question:
        "What's my favorite color ?\nA:White\nB:Black\nC:Blue\nD:Green\nEnter Answer: ",
        answer: "A"
    },
    {
        question:
        "What's my favorite Movie ?\nA:3-Idiots\nB:Raja-Rani\nC:KGF\nD:Baahubali\nEnter Answer: ",
        answer: "B"
    },
    {
        question:
        "In which city, i did my graduation ?\n A:Bangalore\n B:Hyderabad\n C:Pune\n D:Anantapur\nEnter Answer: ",
        answer: "D"
    },
    {
        question:
        "Where do I live ?\n A:Hyderabad\n B:Pune\n C:Bangalore\n D:Ahmedabad\nEnter Answer: ",
        answer: "C"
    },
    {
        question:
        "Do i like waking up early or staying up late ?\n A:Waking up early\n B:Staying up late\n C:Depends on the situation\n D:None of the above\nEnter Answer: ",
        answer: "A"
    },
    {
        question: "What's my favorite fruit ?\n A:Pomegrnate\n B:Apple\n C:Watermelon\n D:Guva\nEnter Answer: ",
        answer: "A"
    },
    {
        question: "What's my favorite food ?\n A:Birayani\n B:Lemon Rice\n C:Dosa\n D:Idle\nEnter Answer: ",
        answer: "B"
    },
    {
        question: "What's my strength ?\n A:Family\n B:Friends\n C:Both A & B\n D:None\nEnter Answer: ",
        answer: "C"
    }
];

var highScore = [
    {
        name: "Naveen",
        score: 8
    },
    {
        name: "Sri",
        score: 7
    }
];

function colorLine()
{
    console.log(chalk.blue("------------------------------------"));
}

function welcome()
{
    console.log(chalk.bold.rgb(10, 50, 100)("Welcome to Do you know Naveen ? Quiz"));
    var playerName = readlineSync.question(chalk.red("May i know your name: "));
    console.log(chalk.blue("welcome " +playerName));
    colorLine();
}

function rules()
{
    console.log(chalk.bold.rgb(10, 50, 100)("Rules of the quiz ! "));
    console.log(chalk.rgb(15, 50, 10)("1. Select  the answer from: A/B/C/D "));
    console.log(chalk.rgb(15, 50, 10)("2. Press Enter"));
    console.log(chalk.rgb(15, 50, 10)("3. Your final score is beats the existing high scrorer score, then send me screenshot i will update"));
    colorLine();
}

function userInterest()
{
    if(readlineSync.keyInYN(chalk.red("Are you interested to play Quize ?")))
    {
        console.log(chalk.bold.rgb(10, 50, 100)("Your Quiz will Start here."));
        colorLine();
        function play(question, answer)
        {
            var userAnswer = readlineSync.question(chalk.red(question));
            if (userAnswer.toLowerCase() == answer.toLowerCase())
            {
                console.log(chalk.blue("your Answer is Right"));
                score = score+1;                
            }
            else {
                console.log(chalk.yellow("your Answer is Wrong"));
                score = score;
            }
            console.log(chalk.bold.rgb(10, 50, 100)("Current Score: "+score));
            colorLine();
        }
        for(var i = 0; i < questions.length; i = i+1)
        {
            play(questions[i].question, questions[i].answer);
        }
        
    }
    else {
        console.log(chalk.yellow("Bye Bye, will see you later"));
        colorLine();
    }          
}

function showScore ()
{
    console.log(chalk.bold.rgb(10, 50, 100)("Hey you socred: "+score));
    console.log("Check out the high scores, if your there send me screenshot and i will update ");
    for(var i=0; i<highScore.length; i++)
    {
        console.log(chalk.yellowBright(highScore[i].name, ": "+highScore[i].score));
    }    
}

colorLine();
welcome();
rules();
userInterest();
showScore();

