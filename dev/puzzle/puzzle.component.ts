import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'my-puzzle',
    templateUrl: './dev/puzzle/puzzle.template.html'
})
export class PuzzleComponent implements OnInit {

    // Had to user strings so that 0 weren't coerced to false
    //  as well as empty switch.values triggering a match
    switch1Answer: string;
    switch2Answer: string;
    switch3Answer: string;
    switch4Answer: string;

    ngOnInit():any {
        this.switch1Answer = Math.round(Math.random()).toString();
        this.switch2Answer = Math.round(Math.random()).toString();
        this.switch3Answer = Math.round(Math.random()).toString();
        this.switch4Answer = Math.round(Math.random()).toString();

        console.log(this.switch1Answer,
                    this.switch2Answer,
                    this.switch3Answer,
                    this.switch4Answer);
    }
}