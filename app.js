

document.getElementById("demo").innerHTML = "My First JavaScript";
//------------------------------
//ram
var ram = navigator.deviceMemory;
alert(`your Ram Size:${ram}GigaByte`);
document.getElementById("demo").innerHTML = ram;

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