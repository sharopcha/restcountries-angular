import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  text: string = '';

  @Output()
  onChnage: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  inputChange(s: string) {
    this.onChnage.emit(s);
  }
}
