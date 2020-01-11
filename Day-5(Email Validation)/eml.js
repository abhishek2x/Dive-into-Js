function validate(){
    var number = document.getElementById("text1").value;

    var regx = /@vitbhopal.ac.in/;

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