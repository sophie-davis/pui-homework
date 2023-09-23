let data = [
    {
      id: 1, 
      content: {title: "This is the title corresponding to the first object"}
    }, 
    {
      id:2,
      content: { title: "This is the title of the second object." },
    },
];

function updateTitle(event) {
    console.log(event.target.value);
}


console.log(window.location.search);

let searchparams = new URLSearchParams(window.location.search);

let currentid = searchparams.get("id");
console.log(currentid);

let currentElement = data[0];

for (element of data) {
    if (element.id == currentid){
        currentElement = element;
    }
}


let title = searchparams.get("title");
console.log(title);

let titleelement = document.getElementById("note-title")

titleelement.innerHTML = <strong>title</strong>;

titleelement.innerText = currentElement.content.title;
