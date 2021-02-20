import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  httpUrl='http://localhost:8080/RESTApiProject/';

  constructor( private httpClient:HttpClient) { }

  getCourses():Observable<Course[]>
  {
    return this.httpClient.get<Course[]>(this.httpUrl);
  }

  addCourse(course:Course):Observable<Course> 
  {
    return this.httpClient.post<Course>(this.httpUrl,course,httpOptions);
  }

  deleteCourse(course:Course | number): Observable<Course> {
    const id = typeof course === 'number' ? course:course.id;
    // const url=this.httpUrl+'id/'+id;
    const deleteurl = `${this.httpUrl}id/${id}` ;
    //console.log('calling delete :'+deleteurl);
    return this.httpClient.delete<Course>(deleteurl);
  }
  getCourseById(courseId: number): Observable<Course> {
    const getByIdUrl= `${this.httpUrl}id/${courseId}`;
    //console.log('getting object');
    //console.log(getByIdUrl);
    return this.httpClient.get<Course>(getByIdUrl);
  } 

  updateCourse(course:Course):Observable<any> {
    return this.httpClient.put(this.httpUrl,course,httpOptions);
  }


}

const httpOptions=
{
  headers:new HttpHeaders({'content-type':'application/json'})
}