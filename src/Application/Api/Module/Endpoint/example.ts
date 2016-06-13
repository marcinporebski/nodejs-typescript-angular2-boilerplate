import Hapi = require('hapi');
import {Inject, Injectable} from "angular2/core";
import ExampleService from "../Service/exampleService";
import {EndpointContainerInterface} from "../../interfaces";

@Injectable()
export default class Example implements EndpointContainerInterface
{
    constructor(
        @Inject(ExampleService) protected exampleService: ExampleService
    ){

    }

    register(server: Hapi.Server, options: Object, next: Function)
    {
       server.route({
            method: 'GET',
            path: '/test',
            handler: (request: Hapi.Request, reply: Hapi.IReply) => {
                this.testEndpoint(request, reply);
            }
        });

        next();
    }

    testEndpoint(request: Hapi.Request, reply: Hapi.IReply)
    {
        reply({
            status: 200,
            message: this.exampleService.getCompositeMessage()
        });
    }
}
