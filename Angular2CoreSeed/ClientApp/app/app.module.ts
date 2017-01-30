import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { HelloWorldComponent } from './components/HelloWorld/helloworld.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDetailComponent } from './components/weatherdetail/weatherdetail.component';
import { FormsModule } from '@angular/forms';
import { WeatherFormComponent } from './components/weatherform/weatherform.component';
import { WeatherService } from './components/weather/weather.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        HelloWorldComponent,
        WeatherComponent,
        WeatherDetailComponent,
        WeatherFormComponent
    ],
    providers: [
        WeatherService
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'hello', component: HelloWorldComponent },
            { path: 'home', component: HomeComponent },
            {
                path: 'weathers', component: WeatherComponent, children: [
                    { path: '', component: WeatherDetailComponent },
                    { path: 'detail/:name', component: WeatherDetailComponent }
                ]
            },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
