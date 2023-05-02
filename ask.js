const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What's your name?",
    "Where do you live?",
    "Why are you here?"
];

const answerEvents = collectAnswers(questions, (answers) => {
    console.log("Thanks for using this app!");
    console.log(answers);
    process.exit();
});

answerEvents.on("answer", answer => {
    console.log(`the answer: ${answer}`);
});
