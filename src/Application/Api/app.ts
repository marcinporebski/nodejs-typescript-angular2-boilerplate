import 'zone.js';
import 'reflect-metadata';
import Hapi = require('hapi');
import {getInjector} from './di';
import {EndpointContainerInterface} from './interfaces';

const injector = getInjector();
const server = new Hapi.Server();

server.connection({
    port: 3000,
    labels: ['api']
});

registerEndpointContainer('Module.Example', '/module');

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});

function registerEndpointContainer(serviceId: string, routePrefix: string)
{
    const container: EndpointContainerInterface = injector.get(serviceId);
    const register = container.register.bind(container);
    
    register['attributes'] = {
        name: serviceId,
        version: '1.0.0'
    };

    server.register(
        {
            register: register,
            options: {}
        },
        { select: 'api', routes: { prefix: routePrefix }},
        function (err) {
            if (err) {
                console.error('Failed to load a plugin:', err);
            }
        }
    );
}