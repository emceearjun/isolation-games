import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatTimer"
})
export class FormatTimerPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;
    let mm = `${this.isLessThanTen(minutes)}${minutes}`;
    let ss = `${this.isLessThanTen(seconds)}${seconds}`;

    return `${mm}:${ss}`;
  }

  private isLessThanTen(value: number) {
    return value < 10 ? "0" : "";
  }
}
