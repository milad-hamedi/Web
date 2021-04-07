//=========================================================================================
//slide show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//=========================================================================================
//net stste
if (navigator.onLine === true) {
    document.getElementById("net").innerHTML = `Net State :  Online`;
}
else { document.getElementById("net").innerHTML = `Net State :  Offline`; }
//=========================================================================================
//ram
let memory = window.navigator.deviceMemory;
document.getElementById("ram").innerHTML = `RAM : ${memory} Gb.`;
//=========================================================================================
//cpu
var logicalProcessorCount = navigator.hardwareConcurrency;
document.getElementById("cpu_core").innerHTML = `Cpu : ${logicalProcessorCount}Core`;
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
//get_os

function get_os()
{
    var parser = new UAParser();
    parser.setUA(window.navigator.userAgent);
    var result = parser.getResult();
    document.getElementById('os').innerHTML = result.os.name + " version " + result.os.version;

}

