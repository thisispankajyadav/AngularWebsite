import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { UpdateComponent } from './update/update.component';
import { AddcourseComponent } from './addcourse/addcourse.component';


const routes: Routes = [
{ path:'slist',component:StudentComponent},
 { path:'add',component:AddcourseComponent},
 { path:'courses',component:CourseComponent},
 { path:'editcourse/:courseId',component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }