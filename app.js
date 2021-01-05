//=========================================================================================
//net stste
if (navigator.onLine === true) {
    document.getElementById("net").innerHTML = `Net State :  Online`;
}
else { document.getElementById("net").innerHTML = `Net State :  Offline`; }
//=========================================================================================
//ram
const memory = navigator.deviceMemory
document.getElementById("ram").innerHTML = `RAM : ${memory} Gb RAM.`;
//=========================================================================================
//cpu
var logicalProcessorCount = navigator.hardwareConcurrency;
document.getElementById("cpu_core").innerHTML = `Cpu : ${logicalProcessorCount}Core`;
//=========================================================================================
var div2=navigator.storage;
document.getElementById("hdd").innerHTML = `hdd : ${div2}`;
//=========================================================================================
//lump
function changeImage()
{
    element=document.getElementById('myimage')
    if (element.src.match("bulbon"))
    {
        element.src="./img/pic_bulboff.gif";
        document.body.style.background = "#f3f3f3";

    }
    else
    {
        element.src="./img/pic_bulbon.gif";
        document.body.style.background ="darkolivegreen";
    }
}
//===========================================================================================
//width
document.getElementById('Width').innerHTML="Screen Width(Pixel) :" +window.innerWidth;
window.addEventListener("resize",getwidth);
function getwidth()
{
    document.getElementById('Width').innerHTML="Screen Width(Pixel) :" +window.innerWidth;
}
//Height
document.getElementById('Height').innerText="Screen Height(Pixel) :"+window.innerHeight;
window.addEventListener(("resize"),getHeight);
function getHeight()
{
    document.getElementById('Height').innerHTML="Screen Height(Pixel) :"+window.innerHeight;
}
//=============================================================================================
//go back & forward button
function goback()
{
    window.history.back();
}
function goforward()
{
    window.history.forward();
}
//==============================================================================================
//clock
var myclock=setInterval(clock,1000);
function clock()
{
    let d=new Date();
    document.getElementById('clock').innerHTML=d.toLocaleTimeString();
}
//===============================================================================================

