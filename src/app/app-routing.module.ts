import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {AboutComponent} from './modules/about/about.component';
import {ResumeComponent} from './modules/resume/resume.component';
import {ProjectsComponent} from './modules/projects/projects.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
},
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {animation: 'slide'}

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
