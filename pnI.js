// Select all elements with the class numBox
var numberProject = document.querySelectorAll(".numBox");

// Calculate the maximum time we want all counters to run (in milliseconds)
var duration = 2000; // Example: all counters will complete in 5 seconds

// Iterate through each element
for (var Box of numberProject) {
    countNum(Box, duration);
}

// Function to increment the number inside numBox to the value specified in the data-count attribute
function countNum(numBox, duration) {
    var end = parseInt(numBox.dataset.count, 10); // Parse the dataset as an integer
    var start = 0;
    
    // Check if end is a valid number
    if (isNaN(end)) {
        console.error(`Invalid data-count value for element:`, numBox);
        return;
    }
    
    // Calculate the interval time based on the duration and the target count
    var intervalTime = duration / end;

    var holder = setInterval(function() {
        start++;
        numBox.innerText = start;
        if (start === end) clearInterval(holder);
    }, intervalTime);
}
