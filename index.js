var name = "Prasad";
console.log(name);
var contentElm = document.getElementById("content")

function getName() {
    var nameElm = document.getElementById("name");
    name = nameElm.value;
    contentElm.innerHTML = "<h1 class='style-my-name'> "+ name +" </h1>";
}

contentElm.innerHTML = "<h1 class='style-my-name'> "+ name +" </h1>";