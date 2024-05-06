//Download Cv script

function downloadDocument() {
    // Replace 'YOUR_DIRECT_DOWNLOAD_LINK' with the actual direct download link obtained from Google Drive
   const downloadLink = 'https://drive.google.com/file/d/18xGNj_3yrA4qcQXxpoea-cxbwRE7tXVA/view?usp=drive_link';

    // Create a temporary anchor element
    var a = document.createElement('a');
    a.href = downloadLink;
    a.target =  "blank"
    a.download = 'Akash-Goswami-Cv.pdf'; // Specify the desired file name with appropriate extension

    // Append the anchor element to the body
    document.body.appendChild(a);

    // Programmatically trigger a click event on the anchor element to start the download
    a.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(a);
}