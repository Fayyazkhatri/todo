var list = document.getElementById('list')


function addtodo(){
    var todo_item = document.getElementById('todo-item')

    var li = document.createElement('li')
    li.setAttribute("class","lst")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    var dltBtn = document.createElement("button")
    var dltText = document.createTextNode("Delete")
    dltBtn.setAttribute("class","btn")
    dltBtn.setAttribute("onclick","deleteItem(this)")
    dltBtn.appendChild(dltText)

    var edtBtn = document.createElement("button")
    var edtTex = document.createTextNode("Edit")
    edtBtn.setAttribute("class","btn")
    edtBtn.appendChild(edtTex)
    edtBtn.setAttribute("onclick","editButton(this)")
    

    li.appendChild(dltBtn)
    li.appendChild(edtBtn)

    list.appendChild(li)

    todo_item.value= ""
 }

function deleteItem(e){
    e.parentNode.remove()

}

function deleteAll(){
    list.innerHTML = ""
}


function editButton(e){
    var val = prompt("enter item to edit" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
}