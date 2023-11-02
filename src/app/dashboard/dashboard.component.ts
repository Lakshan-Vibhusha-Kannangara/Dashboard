import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';


interface AssessmentScore {
  assessmentScores: AssessmentAreaScore[];
  studentScore: number;
  totalQuestionsAttempted: number;
  yearLevel: number;
  class: string[];
  subject: string[];
  distinctionCount: number;
  participationStatus: number;
  schoolName: string;
  correctAnswerPercentage: string;
  sydneyPercentage: string;
}

interface AssessmentAreaScore {
  assessment_id: number;
  assessment_name:string,
  total_questions:number,

  score: number;
  correct_answer_percentage_class:number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{
  data:any;
  constructor(private state:StateService){
    
  }
  ngOnInit() {
  this.state.studentData$.subscribe((response:any)=>{
      this.data=response;
  })
  }
  title = 'application';


 searchQuery: string = '';

  onSearch(query: string) {
    // Handle the search query here, e.g., make an HTTP request with the query.
    // Update search results or perform any other necessary actions.
    console.log(`Search query: ${query}`);
  }

  onSelect(suggestion: string) {
    // Handle the selection of a suggestion, e.g., perform a search or navigation.
    console.log(`Selected suggestion: ${suggestion}`);
  }
   assessmentScoreset = {
    schoolName: 'Example School',
    class: ['Class A', 'Class B', 'Class C'],
    yearLevel: 5,
    totalQuestionsAttempted: 100,
    sydneyPercentage: 85.5,
    correctAnswerPercentage: 70.2,
    subject: ['Math', 'Science', 'History'],
    assessmentScores: [
      { subject: 'Math', score: 80 },
      { subject: 'Science', score: 75 },
      { subject: 'History', score: 90 },
    ],
  };
}
