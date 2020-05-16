import { Component, Input, OnInit } from '@angular/core';

export interface NavbarItem {
  title: string;
  route: string;
}

const navbarItems: NavbarItem[] = [
  {
    title: 'Home',
    route: 'home'
  },
  {
    title: 'About',
    route: 'about'
  },
  {
    title: 'Projects',
    route: 'projects'
  },
  {
    title: 'Resume',
    route: 'resume'
  },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: Array<NavbarItem> = navbarItems;

  constructor() { }

  ngOnInit(): void { }
}
