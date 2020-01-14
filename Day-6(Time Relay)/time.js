var ID;
function prinMeg(){
    document.getElementById("op").innerHTML = "5 seconds have passed";
}
function Start(){
    ID = window.setTimeout(prinMeg, 5000);
}
function Stop(){
    window.clearTimeout(ID);
}