//------------------------------
//ram
var ram = navigator.deviceMemory

//------------------------------
//online or offline
// window.addEventListener('online', function() {
// 	alert('Current status : online');
// });

// window.addEventListener('offline', function() {
// 	alert('Current status : offline');
// });

// // self executing function here
// (function() {
//     // your page initialization code here
//     // the DOM will be available here
//     alert('Current status : online');
 
//  })();
window.addEventListener('load', function() {
    var status = document.getElementById("status");
    var log = document.getElementById("log");
  
    function updateOnlineStatus(event) {
      var condition = navigator.onLine ? "online" : "offline";
  
      status.className = condition;
      status.innerHTML = condition.toUpperCase();
  
      log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
    }
  
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  });
//-------------------------------
//cpu core
// gets the "available" logical processors count
var logicalProcessorCount = navigator.hardwareConcurrency;