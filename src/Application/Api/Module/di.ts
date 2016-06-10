import {ReflectiveInjector, provide, Provider} from "angular2/core";
import PartA from "./Service/partA";
import PartB from "./Service/partB";
import ExampleService from "./Service/exampleService";
import Example from "./Endpoint/example";

export function exported
        (
            prefix = '',
            otherServiceProviderFactoryType: Provider
        )
{
    const localInjector = ReflectiveInjector.resolveAndCreate([
        provide('OtherService', {useFactory: otherServiceProviderFactoryType.useFactory, deps: otherServiceProviderFactoryType.dependencies }),
        PartA, PartB, ExampleService,
        Example
    ]);
    
    if (prefix.length > 0) {
        prefix = prefix + '.';
    }

    return [
        provide(prefix + 'Module.Example', {useFactory: () => { return localInjector.get(Example); }, deps: []}),
    ];
}
