import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

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
import { BestTripComponent } from './components/tripbest/tripbest.component';
import { TripDetailComponent } from './components/tripdetail/tripdetail.component';
import { TripUserComponent } from './components/tripuser/tripuser.component';

import { RatingComponent } from './components/rating/rating.component';

import { StopComponent } from './components/stop/stop.component';
import { EditStopComponent } from './components/stopedit/stopedit.component';

// services
import { LoginService } from './components/login/login.service';
import { TripService } from './components/trip/trip.service';
import { TripDetailService } from './components/tripdetail/tripdetail.service';
import { StopService } from './components/stop/stop.service';
import { WeatherService } from './components/weather/weather.service';
import { WeatherConstraintsService } from './components/weatherconstraints/weatherconstraint.service';

// pipes
import { FormatHour } from './components/weatherform/weatherform.pipe';
import { TripDate } from './components/trip/trip.pipe'
// kendo UI modules
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';

import 'hammerjs';

// paging
import { Ng2PaginationModule } from 'ng2-pagination';
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
        BestTripComponent,
        TripDetailComponent,
        TripUserComponent,
        EditStopComponent,
        StopComponent,
        LoginComponent,
        RatingComponent,
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
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        DateInputsModule,
        DialogModule,
        InputsModule,
        LayoutModule,
        ChartsModule,
        Ng2PaginationModule,
        GridModule,
        ButtonsModule,
        DropDownsModule,
        PopupModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            {
                path: 'trips', component: TripComponent, canActivate: [AuthGuard], children: [
                    { path: '', component: BestTripComponent },
                    { path: 'best', component: BestTripComponent }
                ]
            },
            { path: 'trips/perso', component: TripUserComponent, canActivate: [AuthGuard] },          
            {
                path: 'trips/:id', component: TripDetailComponent, children: [
                    { path: '', component: StopComponent },
                    { path: 'stop', component: StopComponent },
                    { path: 'edit', component: EditStopComponent }
                                      
                ]
            },
            {
                path: 'weathers/:id', component: WeatherComponent, children: [
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
