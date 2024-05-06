var realTime = document.querySelector('#real-time');
var realDate = document.querySelector('#real-date');

setInterval(function() {
    var time = new Date().toLocaleTimeString();
    realTime.innerText = time ;          
}, 1000);
setInterval(function() {
    var d= new Date();
    var options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    var formattedDate = d.toLocaleDateString('en-US', options);
    realDate.innerText = formattedDate;       
}, 1000);