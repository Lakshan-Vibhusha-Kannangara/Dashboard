import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() searchQuery: string = '';
  @Input() placeHolder!:string;
  @Input() tag1!:string;
  @Input() tag2!:string;
  @Input() searchResults!:any;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() select: EventEmitter<string> = new EventEmitter<string>();
  searchSuggestions: string[] = [];
  showSuggestions: boolean = false;

  onSearch(event:Event) {
    this.search.emit(this.searchQuery);
   
    this.showSuggestions = this.searchQuery.length > 0;
  }

  selectSuggestion(suggestion: string) {
    this.select.emit(suggestion);
    this.showSuggestions = false;
    this.searchQuery=''
  }
}
