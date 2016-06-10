import {Injectable} from "angular2/core";
import {OtherServiceInterface} from "../../interfaces";

@Injectable()
export default class OtherService implements OtherServiceInterface
{
   getOtherMessage(): string
   {
       return 'other';
   }
}
