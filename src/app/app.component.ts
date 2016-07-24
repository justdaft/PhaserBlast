import { Component } from '@angular/core';
import {BoardComponent} from './board';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BoardComponent]
})
export class AppComponent {
  title = 'app works!';
}
