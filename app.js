

document.getElementById("demo").innerHTML = "My First JavaScript";
//------------------------------
//ram



const memory = navigator.deviceMemory
console.log (`This device has at least ${memory}GiB of RAM.`)
document.getElementById("demo").innerHTML = memory;

//------------------------------
//online or offline
/* if(navigator.onLine === true)
	alert('You are online');
else
	alert('You are offline'); */
//-------------------------------
//cpu core
// gets the "available" logical processors count
/* var logicalProcessorCount = navigator.hardwareConcurrency;
alert(`your Cpu core:${logicalProcessorCount}Core`); */