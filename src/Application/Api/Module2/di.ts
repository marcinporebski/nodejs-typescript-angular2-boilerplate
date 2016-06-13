import {ReflectiveInjector, provide, Injector} from "angular2/core";
import OtherService from "./Service/otherService";

/**
 * This module exposes:
 *  - Module2.OtherService
 *
 * This module requires:
 *  nothing
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
        OtherService
    ]);

    return [
        provide(modulePrefix + 'Module2.OtherService', {useFactory: () => { return localInjector.get(OtherService); }, deps: []}),
    ];
}