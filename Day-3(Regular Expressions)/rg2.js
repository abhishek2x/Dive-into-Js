// Character Set
function validate(){
    var u = document.getElementById("uname").value;
    
    
    // 1) var regx = /[spd]imple/;
    // 2) var regx = /[a-x]00/;

    // for case sensitivity "i"
    // ex.
    // 3) var regx = /[a-x]00/i; , or
    //    var regx = /[a-x A-X]00/

    // var regx = /[2-9]a[7-9]d/;

     var regx = /[^0-5]abc/;

    if(regx.test(u)){
        alert("Valid Username Congratulations");
        return true;
    }
    else{
        alert("Oops!!....Invalid username");
        u.style.border = "solid 3px red";
        document.getElementById("check").style.visibility = "visible";
        return false;
    }
}
