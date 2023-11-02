import { Component, Input } from '@angular/core';
interface Student {
  studentID: number;
  firstName: string;
  lastName: string;
  yearLevel: number;
}

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  @Input() students: Student[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 12;
  pages: number[] = [];

  ngOnInit() {
    this.updatePageNumbers();
  }

  get paginatedStudents(): Student[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.students.slice(startIndex, endIndex);
  }

  pageChanged(newPage: number): void {
    this.currentPage = newPage;
  }

  totalPages(): number {
    return Math.ceil(this.students.length / this.itemsPerPage);
  }

  updatePageNumbers(): void {
    this.pages = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      this.pages.push(i);
    }
  }
}

