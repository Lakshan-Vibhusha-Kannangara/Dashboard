import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { StateService } from '../services/state.service';
import { ApiService } from '../services/api.service';
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
interface StudentSearch {
  studentID: number;
  fullName: string;
}
@Component({
  selector: 'app-student-body',
  templateUrl: './student-body.component.html',
  styleUrls: ['./student-body.component.css']
})

export class StudentBodyComponent implements OnInit{
  searchResults: StudentSearch[] = []; 
  showSuggestions!: boolean;
  assessmentScore: AssessmentScore={
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
  };
  datapoints: { x: number, y: number }[] = [];
  @ViewChild('app-search')
  searchComponent!: SearchComponent;
  chartOptions = {
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Assessment Scores",
    },
    axisY: {
      title: "Score",

   
    },
    axisX: {
      title: "Assessment Number",
       // Set the unit for the X-axis here
     
    },
    data: [
      {
        type: "line",
        xValueFormatString: "YYYY",
        yValueFormatString: "$#,###.##",
        dataPoints: this.datapoints,
      },
    ],
  };

  constructor(private http: HttpClient,private state:StateService,private apiService:ApiService) {
    this.initializeDataPoints();
  }
  ngOnInit() {
    this.state.studentData$.subscribe((result: AssessmentScore) => {
      this.assessmentScore = result;
      this.initializeDataPoints(); 
    });
  }
  

  accordionItems = [true, false, false];
  searchQuery: string = '';

  onSearch(query: any) {
console.log(query)
    this.searchQuery = query;
    const apiUrl = `http://localhost:5219/api/search/search?name=${this.searchQuery}`;
    this.apiService.searchStudentsByName(this.searchQuery).subscribe(
      (data: any) => {
        console.log(data)
        this.searchResults = data;
        this.showSuggestions = true;

        // Set the searchSuggestions in the SearchComponent to update the suggestions
        this.searchComponent.searchSuggestions = this.searchResults.map(result => result.fullName);
      },
      (error: any) => {
        // Handle errors if the request fails
        console.error('Error:', error);
      }
    );
  
  }

  onSelect(suggestion: any) {

  console.log(suggestion["studentID"])
    this.apiService.getStudentInformation(suggestion["studentID"]).subscribe(
      (data: any) => {
        this.state.setStudentData(data)
     console.log(data)
      },
      (error: any) => {
        // Handle errors if the request fails
        console.error('Error:', error);
      }
    )
  }
  toggleCollapse(index: number): void {
    this.accordionItems[index] = !this.accordionItems[index];
  }
  




  initializeDataPoints() {
    this.datapoints=[]
    console.log(this.assessmentScore.assessmentScores)
    for (const assessmentScore of this.assessmentScore.assessmentScores) {
      const datapoint = {
        x: assessmentScore.assessment_id,
        y: assessmentScore.score
      };

      this.datapoints.push(datapoint);
    }
    this.chartOptions={
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: "Assessment Scores",
      },
      axisY: {
        title: "Score",
  
     
      },
      axisX: {
        title: "Assessment Number",
         // Set the unit for the X-axis here
       
      },
      data: [
        {
          type: "line",
          xValueFormatString: "YYYY",
          yValueFormatString: "$#,###.##",
          dataPoints: this.datapoints,
        },
      ],
    };
  }
}
