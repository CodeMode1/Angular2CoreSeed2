import { Component, ViewEncapsulation } from '@angular/core';
import { process, GroupDescriptor, State, aggregateBy } from '@progress/kendo-data-query';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';



@Component({
    selector: 'demo',
    template: require('./demo.component.html'),
    encapsulation: ViewEncapsulation.None
})

export class DemoComponent {

    // Inputs
    public sliderValue: number = 5;
    public numericValue: number = 5;
    public min: number = 0;
    public max: number = 10;
    public smallStep: number = 1;


    // Buttons
    imageUrl: string = 'http://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png';

    splitButtonItems: Array<any> = [{
        text: 'Keep Text Only',
        icon: 'paste-plain-text',
        click: () => { console.log('Keep Text Only click handler'); }
    }, {
        text: 'Paste as HTML',
        icon: 'paste-as-html'
    }, {
        text: 'Paste Markdown',
        icon: 'paste-markdown'
    }, {
        text: 'Set Default Paste'
    }];

    dropDownButtonItems: Array<any> = [{
        text: 'My Profile'
    }, {
        text: 'Friend Requests'
    }, {
        text: 'Account Settings'
    }, {
        text: 'Support'
    }, {
        text: 'Log Out'
    }];

    public onSplitButtonClick(dataItem: any): void {
        console.log('Paste');
    }

    public onSplitButtonItemClick(dataItem: any): void {
        if (dataItem) {
            console.log(dataItem.text);
        }
    }

    onButtonClick() {
        console.log('click');
    }

    // Input Date
    public isMeeting(date: Date) {
        return /10|15|20/.test(date.getDate().toString()) ? 'meeting' : '';
    }

    // dropdowns
    public listItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];

    public value = ['Basketball', 'Cricket']

    // grid

    private aggregates: any[] = [{ field: 'UnitPrice', aggregate: 'sum' }];

    private state: State = {
        skip: 0,
        take: 5,
        group: [{ field: 'UnitPrice', aggregates: this.aggregates }]
    };

    private data = [{
        "ProductID": 1,
        "ProductName": "Chai",
        "UnitPrice": 18.0000,
        "Discontinued": true
    }, {
        "ProductID": 2,
        "ProductName": "Chang",
        "UnitPrice": 19.0000,
        "Discontinued": false
    }, {
        "ProductID": 3,
        "ProductName": "Aniseed Syrup",
        "UnitPrice": 10.0000,
        "Discontinued": false
    }, {
        "ProductID": 4,
        "ProductName": "Chef Anton's Cajun Seasoning",
        "UnitPrice": 22.0000,
        "Discontinued": false
    }, {
        "ProductID": 5,
        "ProductName": "Chef Anton's Gumbo Mix",
        "UnitPrice": 21.3500,
        "Discontinued": false
    }, {
        "ProductID": 6,
        "ProductName": "Grandma's Boysenberry Spread",
        "UnitPrice": 25.0000,
        "Discontinued": false
    }, {
        "ProductID": 7,
        "ProductName": "Chai",
        "UnitPrice": 22.0000,
        "Discontinued": true
    }];

    private gridData: any = process(this.data, this.state);
    private total: any = aggregateBy(this.data, this.aggregates);

    protected dataStateChange(state: DataStateChangeEvent): void {
        state.group.map(
            group => group.aggregates = this.aggregates);

        this.state = state;

        this.gridData = process(this.data, this.state);
    }

    // chart
    private series: any[] = [{
        name: "India",
        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
    }, {
        name: "Russian Federation",
        data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
    }, {
        name: "Germany",
        data: [0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995]
    }, {
        name: "World",
        data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
    }];
    private categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

    // layout
    private baseImageUrl: string = "http://demos.telerik.com/kendo-ui/content/web/panelbar/";

    private imgeUrl(imageName: string): string {
        return this.baseImageUrl + imageName + ".jpg";
    }

    // pop up
    private toggleText: string = "Hide";
    private show: boolean = true;

    public onToggle(): void {
        this.show = !this.show;
        this.toggleText = this.show ? "Hidе" : "Show";
    }

    // scrollview

    public items: any[] = [{ title: 'Flower', url: 'http://bit.ly/2cJjYuB' }, { title: 'Mountain', url: 'http://bit.ly/2cTBNaL' },
    { title: 'Sky', url: 'http://bit.ly/2cJl3Cx' }];
    public width: string = "600px";
    public height: string = "400px";

    // sortable
    public items2: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8'];

    // upload
    uploadSaveUrl: string = "saveUrl";
    uploadRemoveUrl: string = "removeUrl";
}