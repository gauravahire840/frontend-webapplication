import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewtask',
  templateUrl: './addnewtask.component.html',
  styleUrls: ['./addnewtask.component.css']
})
export class AddnewtaskComponent {
  addTaskForm: FormGroup;
  form: HTMLFormElement;
  

  constructor(private fb: FormBuilder, private taskService: TaskService, private route:Router) {
    this.addTaskForm = this.fb.group({
      idval: [''],
      title : ['', Validators.required],
      description : ['', Validators.required],
      status : [false]
    });
  }

  onSubmit(user1: HTMLInputElement) {
    if (this.addTaskForm.valid) {
      //console.log(this.addTaskForm.value);
      //console.log(this.addTaskForm.value.title);

      let headers = new Headers({"content-type":"application/json"});
      let body = new FormData();
      body.append("id",user1['idval']);
      body.append("title",user1['title']);
      body.append("description",user1['description']);
      body.append("status",user1['status']);


      this.taskService.addNewTasks(body,headers).subscribe((Response) => {
        //Response value
        let link = ["home"];
        this.route.navigate(link);
      }); 
    }
  }
}
