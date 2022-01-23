const sideBtn = document.getElementById("sideBtn");
const sideBar = document.getElementById("side");
const closeBtn = document.getElementById("close");

sideBtn.addEventListener("click",openSide);
closeBtn.addEventListener("click",closeSide);
window.addEventListener("click",closeWindow);
function openSide(){
    sideBar.style.display="block";
}
function closeSide(){
    sideBar.style.display="none";
}
function closeWindow(e){
    if(e.target==sideBar){
        sideBar.style.display="none";
    }
}