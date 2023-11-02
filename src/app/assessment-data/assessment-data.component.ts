import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { StateService } from '../services/state.service';
import { ApiService } from '../services/api.service';
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
@Component({
  selector: 'app-assessment-data',
  templateUrl: './assessment-data.component.html',
  styleUrls: ['./assessment-data.component.css']
})
export class AssessmentDataComponent implements OnInit{
  constructor(private http:HttpClient,private state:StateService,private apiService:ApiService){

  }
  ngOnInit() {
    this.state.assessmentData$.subscribe((response:AssessmentData)=>{
      this.assessmentData=response;
      console.log(response)
      this.chartOptions= {
        animationEnabled: true,
        zoomEnabled: true,
        title: {
          text: "Correct Answer Percentage Per ClassRoom",
        },
        axisY: {
          title: "Percentage",
        },
        axisX: {
          title: "Class",
          interval: 1, // Adjust the interval as needed
        },
        data: [
          {
            type: "column", // Use a column chart to represent percentages
            dataPoints: this.assessmentData.correctAnswerPercentagePerClass.map((item, index) => ({
              x: index, // Using the index as the X-axis value
              y: item.correctAnswerPercentage, // The percentage value
              label: item.className, // Class name as a label
            })),
          },
        ],
      }
    })
  }
  @ViewChild('app-search')
  searchComponent!: SearchComponent;
  showSuggestions!: boolean;
  searchQuery: string = '';
  searchResults: AssessmentData[] = []; 
  assessmentData: AssessmentData = 
  {
    distinctCount:0,
    averageScore: 19.14,
    highDistinctCount: 12,
    participantCount: 1991,
    correctAnswerPercentagePerClass:[],
    sydneyAverageScore: 16.77,
    sydneyParticipants: 155
  };
  chartOptions = {
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Correct Answer Percentage Per Class",
    },
    axisY: {
      title: "Percentage",
    },
    axisX: {
      title: "Class",
      interval: 1, // Adjust the interval as needed
    },
    data: [
      {
        type: "column", // Use a column chart to represent percentages
        dataPoints: this.assessmentData.correctAnswerPercentagePerClass.map((item, index) => ({
          x: index, // Using the index as the X-axis value
          y: item.correctAnswerPercentage, // The percentage value
          label: item.className, // Class name as a label
        })),
      },
    ],
  };
  onSelect(suggestion: any) {

    console.log(suggestion["areaID"])
    
    this.apiService.getAssessmentArea(suggestion["areaID"]).subscribe(
      (data: any) => {
        this.state.setAssessmentData(data)
    
      },
      (error: any) => {
  
        console.error('Error:', error);
      }
    )
  
    }
  onSearch(query: any) {

    this.searchQuery = query;
    this.apiService.searchAssessmentAreasByName(this.searchQuery).subscribe(
      (data: any) => {
        console.log(data)
                this.searchResults = data;
                this.showSuggestions = true;
        
 
                this.searchComponent.searchSuggestions = this.searchResults.map(result => result.sydneyParticipants.toString());
              },
              (error: any) => {
           
                console.error('Error:', error);
              }
    )

  }
}
