console.log('Hello from script.js');
function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('time').innerHTML = currentTime;
}

// Call the function to update the time initially
updateTime();

// Update the time every second
setInterval(updateTime, 1000);