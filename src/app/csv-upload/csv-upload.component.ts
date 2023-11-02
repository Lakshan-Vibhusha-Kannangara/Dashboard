import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent {
  fileId!:string;
  constructor(private http: HttpClient) { }

  onSubmit() {



 
    this.http.post('http://localhost:5219/api/CsvImport/import',{fileId:this.fileId}).subscribe(
      (response) => {
        console.log('CSV data imported successfully', response);

      },
      (error) => {
        console.error('Error while importing CSV data', error);
    
      }
    );
  }
}
