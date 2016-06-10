import {ReflectiveInjector, provide} from "angular2/core";
import OtherService from "./Service/otherService";

export function exported
        (
            prefix = ''
        )
{
    const localInjector = ReflectiveInjector.resolveAndCreate([
        OtherService
    ]);

    if (prefix.length > 0) {
        prefix = prefix + '.';
    }

    return [
        provide(prefix + 'Module2.OtherService', {useFactory: () => { return localInjector.get(OtherService); }, deps: []}),
    ];
}
