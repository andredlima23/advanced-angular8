import { Component } from '@angular/core';

import { TodosService } from '../../../shared/services/todos.service';

@Component({
    selector: 'jv-last-todos',
    templateUrl: './last-todos.component.html',
    styleUrls: ['./last-todos.component.css']
})
export class LastTodosComponent implements OnInit{
    list = [{
        id: 0,
        created: new Date(),
        title: 'a',
        done: true,
    }, 
    {
        id: 1,
        created: new Date(),
        title: 'b',
        done: false,
    }];

    constructor(private todosService: TodosService) {

    }

    markAsDone(id: number) {

    }
}