var ID;
var seconds = 0;
function prinMeg(){
    document.getElementById("op").innerHTML = seconds + " seconds";
    seconds++;
}
function Start(){
    ID = window.setInterval(prinMeg, 1000);
}
function Stop(){
    window.clearTimeout(ID);
}