// const { inc, dec, getCount } = require("./myModule");

// inc();
// inc();
// console.log(getCount());
// dec();
// console.log(getCount());

// const myModule = require("./myModule");
// console.log(myModule.name);
const events = require("events");

let emitter = new events.EventEmitter();

const eventName = "customEvent";

emitter.on(eventName, (message, user) => {
    console.log(`${user}: ${message}`);
});

emitter.emit(eventName, "Wassup", "Gio");

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit(eventName, "GoodBye!", "process");
        process.exit();
    }
    emitter.emit(eventName, data.toString().trim(), "terminal");
});
