import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {env} from '../env'
import { Observable } from 'rxjs';
import { ChatMessage, LoginUser, Search, SendUser, User,AssessmentData,SchoolData } from 'src/app/utilites/interfaces/interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



postLogin(login: LoginUser): Observable<any> {
  return this.http.post(
    `${env.endpoint}/users/login`,
    login
  );
}
postUser(register: SendUser): Observable<any> {
  return this.http.post(`${env.endpoint}/users`, register);
}
private apiUrl = 'http://localhost:5219/api'; // Replace with your API URL



  getStudentInformation(studentID: number): Observable<any> {
    const url = `${this.apiUrl}/Student/GetStudentInformation?studentID=${studentID}`;
    return this.http.get(url);
  }

  searchStudentsByName(name: string): Observable<any> {
    const url = `${this.apiUrl}/search/search?name=${name}`;
    return this.http.get(url);
  }

  getAssessmentArea(assessmentAreaId: number): Observable<any> {
    const url = `${this.apiUrl}/AssessmentArea?assessmentAreaId=${assessmentAreaId}`;
    return this.http.get(url);
  }

  searchAssessmentAreasByName(name: string): Observable<any> {
    const url = `${this.apiUrl}/Search/SearchAssessmentArea?name=${name}`;
    return this.http.get(url);
  }
  getSchoolData(schoolID: number): Observable<SchoolData> {
    const url = `${this.apiUrl}/School/school-info?schoolID=${schoolID}`;
    return this.http.get<SchoolData>(url);
  }

  searchSchoolsByName(name: string): Observable<any> {
    const url = `${this.apiUrl}/search/searchschool?schoolName=${name}`;
    return this.http.get(url);
  }

}

