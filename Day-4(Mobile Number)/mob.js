function validate(){
    var number = document.getElementById("text1").value;

    var regx = /[6-9]\d{9}/;

    if(regx.test(number)){

        var r = document.getElementById("check");
        r.innerHTML = "Valid";
        r.style.visibility = "visible";
        r.style.color = "green";

    }
    else{

        var r = document.getElementById("check");
        r.innerHTML = "Invalid";
        r.style.visibility = "visible";
        r.style.color = "red";
        
    }

}