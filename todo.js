// ? Concept of "createTextNode"
/// <h1></h1> created
//var h = document.createElement('h1')
/// creating myValue as a text node
//var myValue = document.createTextNode('Hello World')
/// adding myvalue into h1 tag
//h.append(myValue)
/// h1 tag got selected
/// appended our h1 tah
//document.querySelector('h1').appendChild(h);


var ul = document.getElementById('list')


// selecting add button
var addButton = document.getElementById('add')
// listening to the click event
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

function addItem() {
    console.log('Add Button Clicked');
}

function removeItem() {
    // selecting childrens of unordered list
    li = ul.children

    // iterating through all the childrens of unordered list view
    for (let i = 0; i < li.length; i++) {
        // checking if checked box is checked
        while (li[i].children[0].checked) {
            //removing the child
            ul.removeChild(li[i])
        }
    }
}