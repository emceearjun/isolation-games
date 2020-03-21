import { Component, OnInit, ViewChild } from "@angular/core";
import { TimerComponent } from "../timer/timer.component";

@Component({
  selector: "tic-tac-toe",
  templateUrl: "./tic-tac-toe.component.html",
  styleUrls: ["./tic-tac-toe.component.scss"]
})
export class TicTacToeComponent implements OnInit {
  @ViewChild("timer") timer: TimerComponent;

  readonly X = "X";
  readonly O = "O";
  readonly EMPTY = null;

  boxModel = [null, null, null, null, null, null, null, null, null];
  currentTurn = this.X;
  winner = this.EMPTY;
  gameOver = false;
  elapsedTime = Date.now().toLocaleString();
  winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  ngOnInit() {
    this.timer.start();
  }

  // Plays the game when a user clicks on a box
  play(position: number) {
    // Check if box has already not been played and game is not over
    if (!this.hasValue(position) && !this.gameOver) {
      // Update the current turn's value at the position
      this.putValue(position);

      // Change the turn to the next player
      this.toggleCurrentTurn();

      // Check for winner
      this.getWinner();
    }
  }

  // Reset the game state
  reset() {
    this.boxModel = this.boxModel.map(box => {
      return this.EMPTY;
    });
    this.currentTurn = this.X;
    this.winner = this.EMPTY;
    this.gameOver = false;
    this.timer.reset();
  }

  // Set the value of the square at the selected position for the current turn
  private putValue(position: number) {
    this.boxModel[position] = this.currentTurn;
  }

  // Check if a position has a valid value
  private hasValue(position: number): boolean {
    if (position >= this.boxModel.length) {
      return null;
    } else {
      if (this.getValueAtPosition(position)) {
        return true;
      } else {
        return false;
      }
    }
  }

  // Toggle the current turn to the next user
  private toggleCurrentTurn() {
    if (this.currentTurn === this.X) {
      this.currentTurn = this.O;
    } else {
      this.currentTurn = this.X;
    }
  }

  // Get the value of sqaure at a given position
  private getValueAtPosition(position: number) {
    if (position >= this.boxModel.length) {
      return undefined;
    } else {
      return this.boxModel[position];
    }
  }

  // Check winner from win patterns and finish game
  private getWinner() {
    this.winPatterns.forEach(this.checkPattern);

    // Check for draw and finish game if no winner
    if (!this.boxModel.includes(null) && !this.winner) {
      this.finishGame();
      return;
    }
  }

  // Check if any boxes match the win pattern and declare winner
  private checkPattern = (pattern: number[]) => {
    if (
      this.boxModel[pattern[0]] !== null &&
      this.boxModel[pattern[0]] === this.boxModel[pattern[1]] &&
      this.boxModel[pattern[1]] === this.boxModel[pattern[2]]
    ) {
      this.winner = this.boxModel[pattern[0]];
      this.finishGame();
      return;
    }
  };

  private finishGame() {
    this.gameOver = true;
    this.timer.stop();
  }
}
