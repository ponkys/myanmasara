import { Component } from '@angular/core';

@Component({
    selector: 'share-links',
    template: `
        <i class="fa fa-link"></i>
        <i class="fa fa-facebook-square"></i>
        <i class="fa fa-twitter-square"></i>
    `,
    styles:[`
    .fa{
        cursor: pointer;
        margin-right: 2rem;
        font-size: 1.2em;
        color: #3c3d3c;
    }`
    ]
})
export class PostShareLinksComponent{

}