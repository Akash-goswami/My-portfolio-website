const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const server = http.createServer((req, res) => {
    // Determine the file path from the request URL
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Default to serving index.html if no specific file requested
    }

    // Resolve the file path to an absolute path
    filePath = path.resolve(filePath);

    // Check if the requested file exists
    fs.exists(filePath, (exists) => {
        if (exists) {
            // Read the file and serve it
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    // Error reading file
                    res.writeHead(500);
                    res.end('Internal Server Error');
                } else {
                    // Set Content-Type based on file extension
                    const extname = path.extname(filePath);
                    let contentType = 'text/html';
                    if (extname === '.css') {
                        contentType = 'text/css';
                    } else if (extname === '.js') {
                        contentType = 'text/javascript';
                    }

                    // Send the response with appropriate Content-Type
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(data);
                }
            });
        } else {
            // File not found
            res.writeHead(404);
            res.end('File Not Found');
        }
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
