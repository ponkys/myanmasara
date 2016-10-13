import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
    selector: 'heart',
    template: `
	<div class="container">
		<i class="fa fa-heart"
			[class.highlighted]="iLike == true"
			(click)="onClick(post)">
		</i>
		<span class="total-likes">0</span>
	</div>`,
    styles: [`
		.fa-heart {
			color: #ccc;
			cursor: pointer;
		}
		.total-likes{
			color: white;
		}

	`],
	providers: []
})
export class PostHeartComponent{
	iLike = 'false';
	
	@Input()
  		

	 @Output() change = new EventEmitter();

	onClick() {
		
	}

}