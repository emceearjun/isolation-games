import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TicTacToeComponent } from "./components/tic-tac-toe/tic-tac-toe.component";
import { SudokuComponent } from './components/sudoku/sudoku.component';

export const appRoutes = [
  { path: "", redirectTo: "/tic-tac-toe", pathMatch: "full" },
  { path: "tic-tac-toe", component: TicTacToeComponent, linkName: "Tic Tac Toe" },
  { path: "sudoku", component: SudokuComponent, linkName: "Sudoku" },
  { path: "**", redirectTo: "/tic-tac-toe" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule {}
