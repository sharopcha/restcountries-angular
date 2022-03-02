import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  subscription!: Subscription;
  darkMode!: boolean;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onDarkMode()
      .subscribe((mode) => (this.darkMode = mode));
  }

  ngOnInit(): void {}

  toggleDarkMode() {
    this.uiService.toggleDarkMode();
  }
}
