//import { hostname } from "os";

import { ServerResponse, IncomingMessage } from "http";

const http = require("http");

const HOST = process.env.HOST || "127.0.0.1";

const PORT = process.env.PORT || "4000";

const server = http.createServer(( _req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World");

})

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
})