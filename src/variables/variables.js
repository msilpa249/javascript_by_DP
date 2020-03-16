var message = "Hello World..!";
console.log(message + "Silpa");

message = 3274;
console.log(parseInt(message + "Silpa"));

message = function (name)  { console.log('Hello '+ name)};

console.log(message("Silpa"));

// Scope
function sum(num1, num2) {
    console.log('priting divide result from sum', divide(2, 2));

    var total = 0;
    total = num1 + num2;
    return total;
}

function divide(num1, num2) {
    var result = 0;
    result = num1 / num2;
    return result;
}

console.log(sum(23, 78));
