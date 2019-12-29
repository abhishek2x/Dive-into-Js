function onLoad(){
    var header = document.querySelector('#header')
    var input = document.querySelector('#input')

    function updateHeaderText(text){
        header.innerText = text
    }

    input.addEventListener('change', function(event){
        updateHeaderText(this.value)
    }, true)
}

if(document.readyState === 'complete'){
    onLoad()
} else{
    window.addEventListener('DOMContentLoaded', onLoad, true)
}
