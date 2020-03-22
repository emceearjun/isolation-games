import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"]
})
export class TimerComponent implements OnInit {
  elapsedTime = 0;

  private timerHandle: any;

  constructor() {}

  ngOnInit() {}

  public start() {
    this.timerHandle = setInterval(this.incrementTimer, 1000);
  }

  public stop() {
    clearTimeout(this.timerHandle);
  }

  public reset() {
    clearTimeout(this.timerHandle);
    this.elapsedTime = 0;
    this.start();
  }

  private incrementTimer = () => {
    this.elapsedTime += 1;
  };
}
