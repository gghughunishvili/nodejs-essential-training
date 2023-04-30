const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What's your name?",
    "Where do you live?",
    "Why are you here?"
];

function collectAnswers(questions, done) {
    const answers = [];

    const questionAnswered = (answer) => {
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            rl.question(questions[answers.length] + "\t", questionAnswered);
        } else {
            return done(answers);
        }
    };

    rl.question(questions[0] + "\t", questionAnswered);
}

collectAnswers(questions, (answers) => {
    console.log("Thanks for using this app!");
    console.log(answers);
    process.exit();
});
