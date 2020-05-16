import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';

import { SidebarComponent} from '../../components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    SidebarComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
