import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { StateService } from '../services/state.service';
import { ApiService } from '../services/api.service';
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
  studentInfos:Student[],
  studentCount: number;
}
@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent implements OnInit{


  i: any;
  @ViewChild('app-search')
  searchComponent!: SearchComponent;
  showSuggestions!: boolean;
  constructor(private http:HttpClient,private state:StateService,private apiService:ApiService)
{

} 
  ngOnInit() {
    this.state.schoolData$.subscribe((response:any)=>{
        this.schoolData=response;
console.log(response)
    },error=>{
      console.log(error)
    })
  }

  searchQuery: string = '';
  searchResults: ClassInfo[] = []; 
  
  schoolData: SchoolData={
    schoolName: '',
    students: [],
    classInfos: [],
    studentInfos:[],
    studentCount: 0
  };

onSearch(query: any) {

      this.searchQuery = query;


      this.apiService.searchSchoolsByName(this.searchQuery).subscribe(
        (data: any) => {

          this.searchResults = data;
          this.showSuggestions = true;
  

          this.searchComponent.searchSuggestions = this.searchResults.map(result => result.className);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      )
    
    }
    onSelect(suggestion: any) {

this.apiService.getSchoolData(suggestion["schoolId"]).subscribe(
  (data: any) => {
    this.state.setSchoolData(data)


  },
  (error: any) => {

    console.error('Error:', error);
  }
)
    
   
      }
}
