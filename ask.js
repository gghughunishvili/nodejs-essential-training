const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "What's your name?",
    "Where do you live?",
    "Why are you here?"
];

collectAnswers(questions, (answers) => {
    console.log("Thanks for using this app!");
    console.log(answers);
    process.exit();
});
