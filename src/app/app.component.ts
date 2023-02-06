import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}, and something</div>`,
})
export class AppComponent {
  value = 'World';
}
