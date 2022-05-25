import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerUpdateService {

constructor(private sw: SwUpdate) {

  this.sw.available.subscribe((ev) => {
    console.log('Current version: ', ev.current);
    console.log('Available version :', ev.available);
  });
  this.sw.activated.subscribe((ev) => {
    console.log('Previous version: ', ev.previous);
    console.log('Current version: ', ev.current);
  });
  
}

}

}
