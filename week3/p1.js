function greet(name, callback) {
    const message = `Hello, ${name}!`;
    return callback(message);
}

function displayMessage(msg) {
    return `The greeting is: "${msg}"`;
}

console.log(greet("Varshith Srimantula", displayMessage));
