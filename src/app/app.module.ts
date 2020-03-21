import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormatTimerPipe } from './components/timer/format-timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    SudokuComponent,
    TimerComponent,
    FormatTimerPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
