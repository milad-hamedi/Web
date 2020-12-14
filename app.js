

document.getElementById("demo").innerHTML = "My First JavaScript";
//------------------------------
//ram
const memory = navigator.deviceMemory
document.getElementById("ram").innerHTML = `This device has at least  ${memory} GiB of RAM.`;
//------------------------------
//online or offline
/*  if(navigator.onLine === true)
 {
 document.getElementById("net").innerHTML = `You are online`;
   }
     else
   { document.getElementById("net").innerHTML = `offline`;}
	  */
//-------------------------------
//cpu core
// gets the "available" logical processors count
//var logicalProcessorCount = navigator.hardwareConcurrency;
//document.getElementById("cpu_core").innerHTML = `your Cpu_core:${logicalProcessorCount}Core`;
