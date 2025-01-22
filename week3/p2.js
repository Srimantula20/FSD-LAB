
function multiplyByTwo(number, callback) {
    const result = number * 2;
    callback(result);
}

function subtractThree(number, callback) {
    const result = number - 3;
    callback(result);
}

function addTen(number, callback) {
    const result = number + 10;
    callback(result);
}


function processNumber(initialNumber) {
    multiplyByTwo(initialNumber, (result1) => {
        subtractThree(result1, (result2) => {
            addTen(result2, (finalResult) => {
                console.log(`The final result is: ${finalResult}`);
            });
        });
    });
}


processNumber(5); 
