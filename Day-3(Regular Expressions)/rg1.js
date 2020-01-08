// Pattern
function validate(){
    var u = document.getElementById("uname").value;
    
    // regx = new RegExp("edu"); 
    var regx = /edu/;
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
