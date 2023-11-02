import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginUser } from '../utilites/interfaces/interface';
interface Student {
  studentID: number;
  firstName: string;
  lastName: string;
  yearLevel: number;
}

interface ClassInfo {
  classID: number;
  className: string;
}

interface SchoolData {
  schoolName:string,
  students: Student[];
  classInfos: ClassInfo[];
  studentCount: number;
}
interface StudentData {
  assessmentScores: Array<any>;
  studentScore: number;
  totalQuestionsAttempted: number;
  yearLevel: number;
  class: Array<string>;
  correctAnswerPercentage: string;
  distinctionCount: number;
  participationStatus: number;
  schoolName: string;
  subject: Array<string>;
  sydneyPercentage: string;
}
interface AssessmentData {
  distinctCount: number;
  averageScore: number;
  highDistinctCount: number;
  participantCount: number;
  correctAnswerPercentagePerClass: {
    className: string;
    correctAnswerPercentage: number;
  }[];
  sydneyAverageScore: number;
  sydneyParticipants: number;
}
@Injectable({
  providedIn: 'root'
})
export class StateService {
  userId!: number;
  private loginUser!: LoginUser; 
  loginusr = new BehaviorSubject<LoginUser>({}); 
  setLoginUser(loginUser: LoginUser) {
    this.loginUser = loginUser;
    this.loginusr.next(loginUser);
  }
  private schoolDataSubject: BehaviorSubject<SchoolData> = new BehaviorSubject<SchoolData>({
    schoolName: '',
    students: [],
    classInfos: [],
    studentCount: 0
  });

  schoolData$: Observable<SchoolData> = this.schoolDataSubject.asObservable();

  private assessmentDataSubject: BehaviorSubject<AssessmentData> = new BehaviorSubject<AssessmentData>({
    distinctCount:0,
    averageScore: 0,
    highDistinctCount: 0,
    participantCount: 0,
    correctAnswerPercentagePerClass: [
      {
        className: "",
        correctAnswerPercentage:0
      },
      
      // Add more entries as needed
    ],
    sydneyAverageScore: 0,
    sydneyParticipants: 0
  });

  // Expose assessmentData as an observable
  assessmentData$: Observable<AssessmentData> = this.assessmentDataSubject.asObservable();

  private studentDataSubject: BehaviorSubject<StudentData> = new BehaviorSubject<StudentData>({
    assessmentScores: [],
    studentScore: 0,
    totalQuestionsAttempted: 0,
    yearLevel: 0,
    class: [],
    correctAnswerPercentage: "",
    distinctionCount: 0,
    participationStatus: 0,
    schoolName: "",
    subject: [],
    sydneyPercentage: "",
  });

  studentData$: Observable<StudentData> = this.studentDataSubject.asObservable();

  constructor() { }

  setAssessmentData(assessmentData: AssessmentData) {
    this.assessmentDataSubject.next(assessmentData);
  }

  setStudentData(studentData: StudentData) {
    this.studentDataSubject.next(studentData);
  }
  setSchoolData(schoolData: SchoolData) {
    this.schoolDataSubject.next(schoolData);
  }
}
