import { Component, Input } from '@angular/core';
interface AssessmentAreaScore {
  assessment_id: number;
  assessment_name:string,
  total_questions:number,

  score: number;
  correct_answer_percentage_class:number;
}

@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css'],
})
export class AssessmentsComponent {
  @Input() assessmentScores: AssessmentAreaScore[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pages: number[] = [];

  ngOnInit() {
    this.updatePageNumbers();
  }

  get paginatedAssessmentScores(): AssessmentAreaScore[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.assessmentScores.slice(startIndex, endIndex);
  }

  pageChanged(newPage: number): void {
    this.currentPage = newPage;
  }

  totalPages(): number {
    return Math.ceil(this.assessmentScores.length / this.itemsPerPage);
  }

  updatePageNumbers(): void {
    this.pages = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      this.pages.push(i);
    }
  }
}
