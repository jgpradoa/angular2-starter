import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'Angular 2';
}