import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  category: string = 'Filter by Region';

  @Output()
  onChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectCategory(str: string) {
    this.onChange.emit(str);
  }
}
