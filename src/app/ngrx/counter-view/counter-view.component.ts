import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.css']
})
export class CounterViewComponent {
  counter: number = 0;
  count$!: Observable<number>; //observable variable/count property
  constructor(private store : Store<{counter : number}>)
  {
    //the store has the initial value
    //the observable will subscribe to the store
    this.count$ = store.select('counter');
    // store.select('counter').subscribe(res =>{
    //   this.counter = res;   
    // })
  }  
}
