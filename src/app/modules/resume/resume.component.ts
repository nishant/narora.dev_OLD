import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 3, color: '#00b4d8'},
    {text: 'Two', cols: 2, rows: 6, color: '#86c2d6'},
    {text: 'Three', cols: 2, rows: 2, color: '#90e0ef'},
    {text: 'Four', cols: 2, rows: 1, color: '#00a6e6'},
  ];

  constructor() { }

  ngOnInit(): void { }

}

// color palette
// 137098
// 1c6789
// 1F4068
// 1F4068

