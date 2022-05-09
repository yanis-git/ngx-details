import { Component } from '@angular/core';

@Component({
  selector: 'nx-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isFirstExempleIsOpen = false;

  firstExampleStateChange(isOpen: boolean) {
    this.isFirstExempleIsOpen = isOpen;
  }
}