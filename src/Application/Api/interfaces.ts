import Hapi = require('hapi');

export interface EndpointContainerInterface
{
    register(server: Hapi.Server, options: Object, next: Function);
}

export interface OtherServiceInterface
{
    getOtherMessage(): string;
}