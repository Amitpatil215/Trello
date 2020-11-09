// ? Concept of "createTextNode"
/// <h1></h1> created
//var h = document.createElement('h1')
/// creating myValue as a text node
//var myValue = document.createTextNode('Hello World')
/// adding myvalue into h1 tag
//h.append(myValue)
/// h1 tag got selected
/// appended our h tag after after h1 tag
//document.querySelector('h1').appendChild(h);


var ul = document.getElementById('list')
var li;

// selecting add button
var addButton = document.getElementById('add')
// listening to the click event
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

function addItem() {
    // selecting textfield
    var input = document.getElementById('input')
    // finding inputed value
    var inputValue = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(inputValue)

    if (inputValue === '') {
        var p = document.createElement('p')
        var pValue = document.createTextNode('Enter your todo')
        p.append(pValue)
        document.querySelector('input').append(p);
        console.log('ok');
    } else {
        // creating list
        li = document.createElement('li');
        // creating input
        var checkbox = document.createElement('input')
        // assiging input  checkbox as type
        checkbox.type = 'checkbox';
        // setting it an id
        checkbox.setAttribute('id', 'check')

        // creating label
        var label = document.createElement('label');
        label.setAttribute('for', 'item')

        //add these elements on web page

        // generating elements
        ul.appendChild(label);
        li.appendChild(checkbox);
        //putting textnode inside label
        label.appendChild(textNode);
        li.appendChild(label);
        // inserting at the top of the list
        ul.insertBefore(li, ul.childNodes[0]);

        //For trasition
        setTimeout(() => {
            li.className = 'visual';
        }, 3);

        //clearing the value
        input.value = ''
    }
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