import Hapi = require('hapi');
import {EndpointContainerInterface} from './interfaces';
import {getInjector} from './di';

const injector = getInjector();

export function registerEndpointContainer(server: Hapi.Server, serviceId: string, routePrefix: string)
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