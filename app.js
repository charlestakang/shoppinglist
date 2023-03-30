// document.getElementById()

//console.dir(document.getElementById("app-title").innerHTML = "Market List")

const shoppingInput = document.getElementById("shopping-input")
const addItemBtn = document.getElementById("add-item-btn")
const ul = document.querySelector(".extra-btn")
// function addToList(){
//     console.log(`I was clicked`)
// }

// const addToList = () => {
//     console.log("I was clicked again")
// }

//you might want to use shoppinginput.value on multiple ocasions store in a variable

addItemBtn.addEventListener("click", (e) => {
    //acts as a form you want to disable it
    e.preventDefault()
    // console.log(`clicked for the third time: ${e}`)
    //check for empty strings
    if (shoppingInput.value === "") {
        alert("Please add an Item")
        return
    }
    
    ul.appendChild(lineItem(shoppingInput.value))

    //create a buton with value from shopping input
    //button to list
})

//create buttonwithclasses
// function createItemBtn(text){
//     const div = document.createElement('div')
//     div.setAttribute('class', 'col-12 col-md-6 d-flex')

//     const button = document.createElement('button')
//     button.setAttribute('class', 'btn bt-lg flex-fill btn-outline-secondary mb-3')

//     div.appendChild(button)

//     button.innerHTML = `${text}<i class="fa-solid fa-xmark text-danger"></i>`

//     extrabtn.appendChild(div)


// }

// function createButton(text){
//     const itemBtn = document.createElement('button')
//     //const tn = document.createTextNode(text)
//     itemBtn.classList = 'btn bt-lg flex-fill btn-outline-secondary mb-3'
//     iconItem = document.createElement('i')

//     iconItem.classList ='fa-solid fa-xmark text-danger'
//     itemBtn.innerHTML = `${text}<i class="fa-solid fa-xmark text-danger"></i>`
//     return itemBtn
// }

// function liColumn(text){
//     const li = document.createElement('li')
//     li.classList = 'class', 'col-12 col-md-6 d-flex'
//     li.style.listStyle = 'none'
//     li.appendChild(createButton(text))
//     return li
// }

// function createButton(classes){
//     const button = document.createElement('button')
//     button.classList = classes

//     const icon = createIcon("fa-solid fa-xmark text-danger")
//     button.appendChild(icon)


//     return button
// }


// function createIcon(classes){
//     const icon = document.createElement('i')
//     icon.className = classes

//     return icon
// }


// function createNewItem(item) {
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(item))

//     //add button and icon
//     const button = createButton('btn bt-lg flex-fill btn-outline-secondary mb-3')
//     li.appendChild(button)

//     ul.appendChild(li)
// }

function iconItem(){
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-xmark text-danger'
    return icon
}

function btnItem(){
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.className = 'btn'
    button.appendChild(iconItem())
    return button
}

function textItem(asignedText){
    const p = document.createElement('p')
    p.className = 'pt-2'
    const text = document.createTextNode(asignedText)
    p.appendChild(text)
    
    return p
}

function lineItem(text){
    const li = document.createElement('li')
    li.className = 'd-flex justify-content-between fw-bold col-12 col-md-6 border px-3 rounded-3 mb-4'
    li.appendChild(textItem(text))
    li.appendChild(btnItem())
    
    return li
}

//     function divItem (text){
//     const div = document.createElement('div')
//     div.className = 'col-12 col-md-6 border px-3 rounded-3'
//     div.appendChild(lineItem(text))
//     return div
// }

// const ulItem = (text) => {
//     const ul = document.createElement('ul')
//     const text = document.createTextNode(text)
//     ul.className = 'row btn-row extra-btn px-2'



// }


//iterarate over list to display items
//if list is nothing then display blank

