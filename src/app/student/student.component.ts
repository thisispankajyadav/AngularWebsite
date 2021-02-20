import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { STUDENTS } from '../students';
import { StudentService} from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  
  sname:string
  selectedName:string
  selectedStudent:Student
  student:Student[];

  constructor(private studentService:StudentService) { }


  ngOnInit() {
    this.getAllStudents();
  }
   onclick(name:string)
   {
     this.selectedName=name
   }
   clicked(s:Student)
   {
     this.selectedStudent=s
   }

  // getAllStudents()
  // {
  //   this.student=STUDENTS;
  // }

  getAllStudents():void
  {
    this.studentService.getAllStudents().subscribe(data=>this.student=data)
  }

}