import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course:Course;
  courses:Course[];
  constructor( private courseService: CourseService, 
                private router: Router) { }

  ngOnInit() {
    this.getCoursesFromService();
  }

  getCoursesFromService():void{
    this.courseService.getCourses().subscribe(data=>this.courses=data);
   }
 
   deleteCourse(course:Course)
   {
     this.courseService.deleteCourse(course).subscribe(data=>
      
      { this.course=data,
        this.router.navigate(["courses"]);
        this.getCoursesFromService();
      });
 
  }
}