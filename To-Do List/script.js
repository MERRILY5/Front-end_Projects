var ul = document.getElementById("list")
var input = document.getElementById("input")

function add()
{
    if(input.value === "")
    {
        alert("Required")
    }
    else
    {
        var item = document.createElement("li")
        item.innerHTML = input.value + " <button onclick='del(event)'>Delete</button>"
        ul.append(item)
        input.value=""
    }
}

function del(event)
{
    event.target.parentElement.remove()
}