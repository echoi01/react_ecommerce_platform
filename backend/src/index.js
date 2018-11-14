require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// middleware to handle cookies via JWT

// middleware to populate current user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
}, serverDetails => {
    console.log(`Server is now running on port http://localhost:${serverDetails.port}`);
})