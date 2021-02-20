import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { Course } from '../course';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course:Course= new Course();

  constructor(private courseService:CourseService,
              private router:Router) { }

  ngOnInit() {
  }

  addCourse()
  {
    this.courseService.addCourse(this.course).subscribe(data=>
      {
      this.course=data,
      this.router.navigate(["courses"]);
    });
  }
}