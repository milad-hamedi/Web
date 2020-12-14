//------------------------------
//ram
var ram = navigator.deviceMemory

//------------------------------
//online or offline
if(navigator.onLine === true)
	alert('You are online');
else
	alert('You are offline');


// window.addEventListener('online', function() {
// 	alert('Current status : online');
// });

// window.addEventListener('offline', function() {
// 	alert('Current status : offline');
// });
//-------------------------------
//cpu core
// gets the "available" logical processors count
var logicalProcessorCount = navigator.hardwareConcurrency;