import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTimer'
})
export class FormatTimerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;
    let minutesString: string;
    let secondsString: string;

    minutesString = `${this.isLessThanTen(minutes)}${minutes}`;
    secondsString = `${this.isLessThanTen(seconds)}${seconds}`;

    return `${minutesString}:${secondsString}`;
  }

  private isLessThanTen(value: number) {
    return value < 10 ? "0": "";
  }

}
