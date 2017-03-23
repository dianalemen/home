import { Component } from '@angular/core';

@Component ({
    selector: "todo-list",
    templateUrl: "todos.component.html",
    styleUrls: ["todos.component.css"]
})
export class MyTask{
   
    tasks = [{
        mustdo : 'make all happy',
        status: false
    },{
        mustdo: 'make all happy2',
        status: false
    },{
        mustdo: "make all happy3",
        status: false
    }];

    setCompleted(item, cheked: boolean){
        item.completed = cheked;
    }

    removeItem(item){
        this.tasks.splice(this.tasks.indexOf(item), 1);
    }

    done($event){
        if($event === 13){
            this.add($event.target);
        }
    }

    add(input){
        let a = input.value;
        if(a == ''){
            alert("Input your task!")
        } else {
        this.tasks.push({mustdo: a, status: false});
        input.value = '';
        }
    }
}