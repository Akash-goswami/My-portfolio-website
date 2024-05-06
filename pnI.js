var numberProject = document.querySelectorAll(".numBox");

for (var Box of numberProject) {
    countNum(Box);
}

function countNum(numBox) {
    var end = numBox.dataset.count; // Parse the dataset as integer
    var start = 0;
    var holder = setInterval(function() {
        start++;
        numBox.innerText = start;
        if (start == end) clearInterval(holder); // Use strict equality to check
    }, 1000);
}
