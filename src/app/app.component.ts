import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}, and something, and some</div>`,
})
export class AppComponent {
  value = 'World';
}
