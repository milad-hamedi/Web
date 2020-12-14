var ram = navigator.deviceMemory


window.addEventListener('online', function() {
	alert('Current status : online');
});

window.addEventListener('offline', function() {
	alert('Current status : offline');
});