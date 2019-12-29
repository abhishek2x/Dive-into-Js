var header = document.querySelector('#header')
var input  = document.querySelector('#input')


function updateHeaderText(text){
    header.innerText = text
}

// input.onchange = function(event){
//     // console.log(event.target.value)
//     updateHeaderText(this.value)
// }


input.addEventListener('change', function(event){
    updateHeaderText(this.value)
}, true)
