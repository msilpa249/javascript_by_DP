console.log('HOISTING STARTED');

console.log(name);
var name = "javascript";
console.log(name);


if (true) {
    var name = 'Silpa';
    console.log(name);
}
console.log(name);

if (true) {
    let name = 26;
    console.log(name);
}
console.log(name)


let someText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est fugit non ratione voluptate? Eaque eos facere harum incidunt ipsa ipsam iure laborum laudantium nesciunt perspiciatis quia rem tempora, vero voluptatem?"

console.log(someText);

someText = "Re assigned";

console.log(someText);

const fixText = "Fixed Text";

console.log(fixText);

fixText = "re-assigned";

console.log(fixText);