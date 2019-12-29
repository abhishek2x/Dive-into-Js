var header = document.querySelector('#header')
var input  = document.querySelector('#input')


function updateHeaderText(text){
    header.innerText = text
}
// updateHeaderText("Oops!!...Its changed")

input.onchange = function(event){
    // console.log(event.target.value)
    updateHeaderText(this.value)
}
