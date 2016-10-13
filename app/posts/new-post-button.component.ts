import { Component} from '@angular/core';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'new-post-button',
    template: `
        <button md-mini-fab>
            <md-icon class="md-24">add</md-icon>
        </button>
    `,
    styles: [`
        [md-mini-fab] {
            background-color: #ff1d14;
            box-sizing: content-box;
        }
        [md-mini-fab].md-button-focus{
            background-color: #3c3d3c;
        }
        [md-mini-fab] i, [md-mini-fab] md-icon {
                padding:0;
        }`
    ],
    directives: [MdIcon, MD_BUTTON_DIRECTIVES],
    providers: [MdIconRegistry]
})
export class NewPostButtonComponent {

    constructor() { }

}