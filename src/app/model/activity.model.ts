import { Priority } from "./priority";

export class Activity {
    status:boolean;
    description:string;
    priority?:Priority;

    constructor (inputValue:string, priority:string){
        this.status = false;
        this.description = inputValue;
        if (priority === '1'){
            this.priority = Priority.low;
        } else if( priority === '2'){
            this.priority =Priority.middle;
        } else if (priority === '3'){
            this.priority = Priority.high;
        }
    }
}
