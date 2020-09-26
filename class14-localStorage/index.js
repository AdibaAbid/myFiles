function addItem() {
    //step-1 get input element
    var inputValue = document.getElementById("input")
    console.log(inputValue)

    //step-2.1 create an li elemnent and add value
    var listItem = document.createElement("LI")
    listItem.innerHTML = "<span>" + inputValue.value + "</span>"

    //step-2.2 create button element and attatch to li elemnt
    var delItem = document.createElement("BUTTON")
    delItem.innerHTML = "Delete"
    listItem.appendChild(delItem)
    delItem.setAttribute("onclick", "deleteItem(event)")

    //step-2.3 create button element and attatch to li elemnt
    var editItem = document.createElement("BUTTON")
    editItem.innerHTML = "Edit"
    listItem.appendChild(editItem)
    editItem.setAttribute("onclick", "editItem(event)")

    //step-3 attach element to html
    var list = document.getElementById("list")
    list.appendChild(listItem)

    //step-4 empty input value
    inputValue.value = ""


}

function deleteItem(event) {

    var listItem = event.target.parentElement
    listItem.remove()
}

function editItem(event) {
    // remove any current-edit id item 

    var currentItem = document.getElementById("current-edit")
    if (currentItem) {
        currentItem.removeAttribute("id")
    }

    var valueElement = event.target.parentElement.children[0]
    document.getElementById("input").value = valueElement.innerHTML
    valueElement.setAttribute("id", "current-edit")
    var inputArea = document.getElementById("input-area")
    var button = inputArea.children[1]
    button.innerHTML = "Update"
    button.setAttribute("onclick", "updateItem()")

}

function updateItem() {
    var inputValue = document.getElementById("input")
    var currentItem = document.getElementById("current-edit")
    currentItem.innerHTML = inputValue.value
    currentItem.removeAttribute("id")

    inputValue.value = ""

    var inputArea = document.getElementById("input-area")
    var button = inputArea.children[1]
    button.innerHTML = "Add"
    button.setAttribute("onclick", "addItem()")

}