import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';

// login
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/guards/auth.guard';

// main components
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';

import { DeleteComponent } from './components/delete/delete.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherFormComponent } from './components/weatherform/weatherform.component';
import { WeatherDetailComponent } from './components/weatherdetail/weatherdetail.component';

import { WeatherConstraintsComponent } from './components/weatherconstraints/weatherconstraints.component';
import { WeatherConstraintComponent } from './components/weatherconstraints/weatherconstraint.component';

import { TripComponent } from './components/trip/trip.component';
import { TripDetailComponent } from './components/tripdetail/tripdetail.component';
import { TripUserComponent } from './components/tripuser/tripuser.component';

import { StopComponent } from './components/stop/stop.component';
import { EditStopComponent } from './components/stopedit/stopedit.component';

// services
import { LoginService } from './components/login/login.service';
import { TripService } from './components/trip/trip.service';
import { TripDetailService } from './components/tripdetail/tripdetail.service';
import { StopService } from './components/stop/stop.service';
import { WeatherService } from './components/weather/weather.service';
import { WeatherConstraintsService } from './components/weatherconstraints/weatherconstraint.service';

// pipes, external modules
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormatHour } from './components/weatherform/weatherform.pipe';
import { TripDate } from './components/trip/trip.pipe'
import { DialogModule } from '@progress/kendo-angular-dialog';
//import { PopupModule } from '@progress/kendo-angular-popup';
//import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        DeleteComponent,
        WeatherComponent,
        WeatherDetailComponent,
        WeatherFormComponent,
        WeatherConstraintsComponent,
        WeatherConstraintComponent,
        TripComponent,
        TripDetailComponent,
        TripUserComponent,
        EditStopComponent,
        StopComponent,
        LoginComponent,
        // pipes
        FormatHour,
        TripDate
    ],
    providers: [
        AuthGuard,
        LoginService,
        TripService,
        TripDetailService,
        StopService,
        WeatherService,
        WeatherConstraintsService
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        DateInputsModule,
        DialogModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'trips', component: TripComponent, canActivate: [AuthGuard] },
            { path: 'trips/perso', component: TripUserComponent, canActivate: [AuthGuard] },          
            {
                path: 'trips/:id', component: TripDetailComponent, children: [
                    { path: '', component: StopComponent },
                    { path: 'stop', component: StopComponent },
                    { path: 'edit', component: EditStopComponent }
                ]
            },
            {
                path: 'weathers', component: WeatherComponent, children: [
                    { path: '', component: WeatherDetailComponent },
                    { path: 'detail/:id', component: WeatherDetailComponent }
                ]
            },
            { path: 'weatherConstraints', component: WeatherConstraintsComponent },
            { path: 'weatherConstraints/:id', component: WeatherConstraintComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
