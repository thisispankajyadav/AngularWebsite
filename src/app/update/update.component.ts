import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  course:Course;

  constructor(private courseService:CourseService,
    private router:Router,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.getCourseByCourseId();
  }

  getCourseByCourseId(){

    const id:number=+this.activatedRoute.snapshot.paramMap.get('courseId');
   // console.log('fetching: '+id);
    this.courseService.getCourseById(id).subscribe(data=>this.course=data);
  }
  updateCourse()
  {
    this.courseService.updateCourse(this.course).subscribe(data=>
          {
            this.course=data,
            this.router.navigate(["courses"])
            });
  }
}