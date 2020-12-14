var ram = navigator.deviceMemory

//------------------------------
//online or offline
window.addEventListener('online', function() {
	alert('Current status : online');
});

window.addEventListener('offline', function() {
	alert('Current status : offline');
});

//-------------------------------
//cpu core
// gets the "available" logical processors count
var logicalProcessorCount = navigator.hardwareConcurrency;