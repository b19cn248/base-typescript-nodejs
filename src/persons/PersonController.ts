import {Controller, Get, Route, Tags} from "tsoa";
import {Person} from "./Person";

@Route("persons")
@Tags("persons")
export class PersonController extends Controller {

    @Get("")
    public async getPerson(): Promise<Person> {
        return new Person("23/08/2001", "Hieu", "Nguyen").toJSON();
    }
}