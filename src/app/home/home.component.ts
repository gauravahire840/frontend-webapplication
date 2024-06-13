import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

interface Task {
  id:any;
  title: string;
  description: string;
  status: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //@ViewChild('modal') modal?: TaskModalComponent;
  @ViewChild('addTaskModal') addTaskModal: ElementRef;
  tasks: Task[] = [];
  /*tasks: Task[] = [
    { title: 'Task 1', description: 'Description for task 1', status: 'Completed' },
    { title: 'Task 2', description: 'Description for task 2', status: 'In Progress' },
    { title: 'Task 3', description: 'Description for task 3', status: 'Pending' }
  ];*/

  constructor(private taskService: TaskService, private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  delmytask(taskid) {
    var tempvar1 = confirm('Are you sure. you want to delete?');

    if(tempvar1==true) {
      this.taskService.deletemyTasks(taskid).subscribe((data: Task[]) => {
        //this.tasks = data;
        alert('Task Deleted Successfully.');
        this.route.navigate(["/redirectme"]);
      });
    }
  }

  editmytask(taskid,tasktitle,taskdesc,taskstatus) {
    localStorage.clear();
    localStorage.setItem("taskid", taskid);
    localStorage.setItem("taskname", tasktitle);
    localStorage.setItem("taskdesc", taskdesc);
    localStorage.setItem("taskstatus", taskstatus);
    this.route.navigate(["/edit-task/"+taskid]);
    //alert('taskid : ' +taskid);
  }

  // openModal() {
  //   this.modal.open(null);
  // }

  openAddTaskModal() {
    const modal = this.addTaskModal.nativeElement;
    modal.classList.add('show');
    modal.style.display = 'block';
    // Code to open the modal here
    //$('#addTaskModal').modal('show'); // Ensure jQuery is imported
  } 
 
  getBadgeClass(status: string): string {
    switch(status) {
      case 'Completed':
        return 'badge badge-success';
      case 'In Progress':
        return 'badge badge-warning';
      case 'Pending':
        return 'badge badge-danger';
      default:
        return 'badge badge-secondary';
    }
  }
}
