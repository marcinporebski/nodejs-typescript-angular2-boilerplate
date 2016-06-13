import {ReflectiveInjector, provide, Injectable} from "angular2/core";
import {exported as Module} from "./Module/di";
import {exported as Module2} from "./Module2/di";

const injector = ReflectiveInjector.resolveAndCreate([]
    .concat(
        Module2('', getInjector, {})
    )
    .concat(
        Module('', getInjector, {'OtherService': 'Module2.OtherService'})
    )
);

export function getInjector()
{
    return injector;
}

