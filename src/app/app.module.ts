import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent ,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolverService
} from './events/index'

import { NavBarComponent } from './nav/nav-bar.component'
import { EventsAppComponent } from './events-app.component';
import { ToastrServise } from './common/toastr.service'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrServise,
    EventRouteActivator,
    EventListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState (component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('you have not saved your event, do you want to cancle !')

  return true
}
