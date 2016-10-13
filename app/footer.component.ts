import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    template: `
    <section grad>
        <div class="content">
            <div class="links">
                <ul>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Team</li></a>
                </ul>
            </div>
            <form class="newsletter">
                <input type="text" id="email" name="email">
            </form>
        </div>
    </section>
    `,
    styles: [`
        ul {
            display: flex;
            flex-wrap: wrap;  
        }
        li {
            list-style-type: none;
            padding-right: 3em;
        }
        a {
           color: #EDEFF5;
           text-decoration: none;
           font-size: 0.8rem;
        }
        a:hover {
            color: #3c3d3c;
        }
        section {
            width: 100%;
            color: 
        }
        
        .grad {
            background: rgba(226,226,226,0.3);
            background: -moz-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);
            background: -webkit-gradient(left top, right top, color-stop(0%, rgba(226,226,226,1)), color-stop(21%, rgba(219,219,219,1)), color-stop(56%, rgba(209,209,209,1)), color-stop(100%, rgba(254,254,254,1)));
            background: -webkit-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);
            background: -o-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);
            background: -ms-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);
            background: linear-gradient(to right, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe', GradientType=1 );
        }
        .newsletter{
            padding-right: 3em;
        }
        .content{
            width: 50%;
            margin: 0 auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: flex-end;
        }
        .links {
            color: #EDEFF5;
        }
    `]
})
export class FooterComponent{

}