import {Component} from '@angular/core';
import {MyComponentComponent} from "./my-component/my-component.component";
import {TestComponent} from "./test/test.component";

@Component({
    selector: 'my-app',
    templateUrl: './dev/app.template.html',
    directives: [MyComponentComponent]
})
export class AppComponent {

}