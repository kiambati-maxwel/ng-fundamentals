import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { EventService } from './shared/event.service'
import { ToastrServise } from '../common/toastr.service'
import { IEvent } from './shared/index'

@Component({
  template: `
  <div>
  <h1>Upcoming Angular Events </h1>
  <hr>
  <div class="row">
    <div class="col-md-5" *ngFor = "let event of events">
    <event-thumbnail (click) = "handleThumbnailClick(event.name)" [event]="event"> </event-thumbnail>
    </div>
  </div>
  </div>
  `
})
export class EventListComponent implements OnInit {
  events: IEvent[]

  constructor (private eventService: EventService,
     private toastr: ToastrServise,
     private route: ActivatedRoute){
  }

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }
}
