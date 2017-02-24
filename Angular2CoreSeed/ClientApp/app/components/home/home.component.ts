import { Component, OnInit, AfterViewChecked } from '@angular/core';


@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.css')]
})


export class HomeComponent {
    public selected: number;
    public items: any[];

    constructor() {
        this.selected = 1;
    }

    ngOnInit() {
        this.items = [
            {
                subject: "ASP.NET Core",
                content: "ASP.NET Core and C# for cross-platform server-side code",
                link: 'https://get.asp.net/',
                link2: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'
            },
            {
                subject: "Angular 2 and TypeScript ",
                content: "for client-side code",
                link: 'https://angular.io/',
                link2: 'http://www.typescriptlang.org/'
            },
            {
                subject: "Webpack",
                content: "for building and bundling client-side resources",
                link: 'https://webpack.github.io/'
            },
            {
                subject: "Bootstrap",
                content: "for layout and styling",
                link: 'http://getbootstrap.com/'
            }
        ];
    }
   
}
