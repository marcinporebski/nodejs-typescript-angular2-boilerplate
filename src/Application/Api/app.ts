import 'zone.js';
import 'reflect-metadata';
import Hapi = require('hapi');
import {registerEndpointContainer} from "./utilities";

const server = new Hapi.Server();

server.connection({
    port: 3000,
    labels: ['api']
});

registerEndpointContainer(server, 'Module.Example', '/module');

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});