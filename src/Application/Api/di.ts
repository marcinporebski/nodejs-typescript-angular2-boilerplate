import {ReflectiveInjector, provide, Injectable} from "angular2/core";
import {exported as Module} from "./Module/di";
import {exported as Module2} from "./Module2/di";

const injector = ReflectiveInjector.resolveAndCreate([
        
    ]
    .concat(Module2(''))
    .concat(Module('', provide('OtherService', {useFactory: () => {
            return injector.get('Module2.OtherService');
         }, deps: []}))
     )
);

export function getInjector()
{
    return injector;
}

