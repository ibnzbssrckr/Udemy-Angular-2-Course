import {Component} from '@angular/core';
import {PuzzleComponent} from "./puzzle/puzzle.component";

@Component({
    selector: 'my-app',
    templateUrl: './dev/app.template.html',
    directives: [PuzzleComponent]
})
export class AppComponent {

}