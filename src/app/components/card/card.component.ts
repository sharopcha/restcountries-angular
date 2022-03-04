import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  flag!: string;

  @Input()
  name!: string;

  @Input()
  population!: string;

  @Input()
  region!: string;

  @Input()
  capital!: string;

  constructor() {}

  ngOnInit(): void {}
}
