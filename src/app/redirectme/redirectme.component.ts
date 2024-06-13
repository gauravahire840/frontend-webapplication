import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirectme',
  templateUrl: './redirectme.component.html',
  styleUrls: ['./redirectme.component.css']
})
export class RedirectmeComponent {
  constructor( private route:Router) { }

  ngOnInit(): void {
    this.route.navigate(["/home"]);
  }
}
