import { Priority } from "./priority";

export class Activity {
    status:boolean;
    description!: string;
    priority?:Priority;

    constructor (){
        this.status = false;
    }
}
