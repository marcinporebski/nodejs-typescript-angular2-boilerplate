import {ReflectiveInjector, provide, Provider, Injector} from "angular2/core";
import PartA from "./Service/partA";
import PartB from "./Service/partB";
import ExampleService from "./Service/exampleService";
import Example from "./Endpoint/example";

/**
 * This module exposes:
 *  - Module.Example
 *
 * This module requires:
 *  - OtherService
 *
 */
export function exported(
    modulePrefix = '',
    getGlobalInjector: () => Injector,
    aliases: {}
)
{
    const globalGet = function(token) {
        if (aliases.hasOwnProperty(token)) {
            token = aliases[token];
        }

        return getGlobalInjector().get(token);
    };

    if (modulePrefix.length > 0) {
        modulePrefix = modulePrefix + '.';
    }

    const localInjector = ReflectiveInjector.resolveAndCreate([
        provide('OtherService', {useFactory: () => { return globalGet('OtherService'); }, deps: [] }),
        PartA, PartB, ExampleService,
        Example
    ]);

    return [
        provide(modulePrefix + 'Module.Example', {useFactory: () => { return localInjector.get(Example); }, deps: []}),
    ];
}
