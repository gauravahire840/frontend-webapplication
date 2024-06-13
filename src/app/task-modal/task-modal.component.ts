import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {
  task: any = {};
  @ViewChild('modal') modal!: TaskModalComponent;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'taskModalLabel' }).result.then((result) => {
      // Modal closed
    }, (reason) => {
      // Modal dismissed
    });
  }

  saveTask() {
    // Add your logic to save the task
    console.log('Task saved:', this.task);
    this.modalService.dismissAll(); // Close the modal
  }


}
