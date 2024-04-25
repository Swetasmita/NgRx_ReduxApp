import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterViewComponent } from './ngrx/counter-view/counter-view.component';
import { CounterControlComponent } from './ngrx/counter-control/counter-control.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './core/store/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterViewComponent,
    CounterControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer
    }, {}),
    StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: true
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
