// document.getElementById()

//console.dir(document.getElementById("app-title").innerHTML = "Market List")

const shoppingInput = document.getElementById("shopping-input")
const addItemBtn = document.getElementById("add-item-btn")
const extrabtn = document.querySelector(".extra-btn")
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

    if (shoppingInput.value !== null){
        createItemBtn(shoppingInput.value)
        return
    }

    //create a buton with value from shopping input
    //button to list
})

//create buttonwithclasses
function createItemBtn(text){
    const div = document.createElement('div')
    div.setAttribute('class', 'col-12 col-md-6 d-flex')

    const button = document.createElement('button')
    button.setAttribute('class', 'btn bt-lg flex-fill btn-outline-secondary mb-3')

    div.appendChild(button)

    button.innerHTML = `${text}<i class="fa-solid fa-xmark text-danger"></i>`

    extrabtn.appendChild(div)


}

//iterarate over list to display items
//if list is nothing then display blank

