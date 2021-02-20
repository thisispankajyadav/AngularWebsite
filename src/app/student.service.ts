import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Student} from './student';
import { STUDENTS } from "./students";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getAllStudents():Observable<Student[]>{

    return of(STUDENTS);
  }
}