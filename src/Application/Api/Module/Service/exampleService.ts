import {Inject, Injectable} from "angular2/core";
import PartA from "./partA";
import PartB from "./partB";
import {OtherServiceInterface} from "../../interfaces";

@Injectable()
export default class ExampleService
{
    constructor(@Inject(PartA) protected partA: PartA,
                @Inject(PartB) protected partB: PartB,
                @Inject('OtherService') protected otherService: OtherServiceInterface)
    {
        
    }

    getCompositeMessage(): string
    {
        return 'hello from ' + this.partA.getMessage() + ' and ' + this.partB.getMessage() 
            + ' and even ' + this.otherService.getOtherMessage();
    }
}
