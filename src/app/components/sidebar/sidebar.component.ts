import {Component, Input, OnInit} from '@angular/core';
import {slideInAnimation} from '../../animations/slide.animation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  @Input() items: string[];
  @Input() heading: string;

  constructor() { }

  ngOnInit(): void {
  }
}
