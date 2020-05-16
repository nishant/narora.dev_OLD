import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  sidebarItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor() { }
  ngOnInit(): void { }
}
