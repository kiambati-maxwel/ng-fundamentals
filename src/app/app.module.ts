import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolverService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

import { NavBarComponent } from './nav/nav-bar.component'
import { EventsAppComponent } from './events-app.component'
import { TOASTR_TOKEN, IToastr } from './common/toastr.service'
import { CollapsibleWellComponent } from './common/collapsible-well.component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service';

declare let toastr: IToastr

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
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

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you have not saved your event, do you want to cancle !')

  return true
}
