import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent {
  editTaskForm: FormGroup;
  form: HTMLFormElement;
  

  constructor(private fb: FormBuilder, private taskService: TaskService, private route:Router) {
    this.editTaskForm = this.fb.group({
      idval: [''],
      title : ['', Validators.required],
      description : ['', Validators.required],
      status : [false]
    });
  }

  tasktitle:any;
  taskdesc:any;
  taskstatus:any;
  taskid:any;

  ngOnInit(): void {
    this.taskid=localStorage.getItem("taskid");
    this.tasktitle=localStorage.getItem("taskname");
    this.taskdesc=localStorage.getItem("taskdesc");
    this.taskstatus=localStorage.getItem("taskstatus").toString();;
  }

  onSubmit(user1: HTMLInputElement) {
    if (this.editTaskForm.valid) {
      //console.log(this.addTaskForm.value);
      //console.log(this.addTaskForm.value.title);

      let headers = new Headers({"content-type":"application/json"});
      let body = new FormData();
      body.append("id",user1['idval']);
      body.append("title",user1['title']);
      body.append("description",user1['description']);
      body.append("status",user1['status']);


      // this.taskService.addNewTasks(body,headers).subscribe((Response) => {
      //   //Response value
      //   let link = ["home"];
      //   this.route.navigate(link);
      // }); 
    }
  }
}
