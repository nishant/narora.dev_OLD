import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [ResumeComponent],
    imports: [
        CommonModule,
        MatGridListModule
    ]
})
export class ResumeModule { }
