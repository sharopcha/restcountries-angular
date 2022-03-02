import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private darkMode!: boolean;
  private subject = new Subject<any>();
  private html: HTMLElement = window.document.documentElement;

  constructor() {}

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.subject.next(this.darkMode);

    this.darkMode
      ? this.html.classList.add('dark')
      : this.html.classList.remove('dark');
  }

  onDarkMode(): Observable<any> {
    return this.subject.asObservable();
  }
}
