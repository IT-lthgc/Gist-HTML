const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Proxy the request to the target URL
    const targetUrl = 'https://gist.github.com/IT-lthgc/a1ae1dd0d728cc9fda1922413fd9e313/raw';
    proxy.web(req, res, { target: targetUrl });
});

// Start the server on port 3000
const port = 3000;
server.listen(port, () => {
    console.log(`Proxy server is running on http://localhost:${port}`);
});
