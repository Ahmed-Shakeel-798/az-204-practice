import * as dotenv from 'dotenv';
import { createServer } from 'http';

dotenv.config();
const port = process.env.PORT || 3000;

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(process.env.MESSAGE);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
