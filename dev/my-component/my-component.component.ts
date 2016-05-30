import {Component} from '@angular/core';
import {TestComponent} from "../test/test.component";
import {OnInit} from "@angular/core";

@Component({
    selector: 'my-component',
    templateUrl: './dev/my-component/my-component.template.html',
    styleUrls: ['src/css/mycomponent.css'],
    directives: [TestComponent]
})
export class MyComponentComponent implements OnInit {
    name: string;

    ngOnInit():any {
        this.name = 'Max';
    }
}