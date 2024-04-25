import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementAction, incrementAction, resetAction } from 'src/app/core/store/counter.action';

@Component({
  selector: 'app-counter-control',
  templateUrl: './counter-control.component.html',
  styleUrls: ['./counter-control.component.css']
})
export class CounterControlComponent {

  constructor(private store : Store){}
 // TODO: Dispatch an increment action
  increment(){
    this.store.dispatch(incrementAction());
  }
  // TODO: Dispatch an decrement action
  decrement(){
    this.store.dispatch(decrementAction());
  }
  //dispatch a reset action
  reset(){
    this.store.dispatch((resetAction()));    
  }

}
