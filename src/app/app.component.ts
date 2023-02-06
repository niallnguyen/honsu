import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}, this is the first line, and add some</div>`,
})
export class AppComponent {
  value = 'World';
}
