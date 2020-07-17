const express = require('express');
const helmet = require('helmet');
const server = express();
const pRouter = require('./Routers/projectRouter')
const rsRouter = require('./Routers/resourceRouter')
const tRouter = require('./Routers/taskRouter')

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API IS ONLINE' });
});

server.use("/api/projects", pRouter)
server.use("/api/resources", rsRouter)
server.use("/api/task", tRouter)
module.exports = server;