import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  public readonly redButton:string = 'red';
  public readonly greenButton:string = 'green';
  public readonly blueButton:string = 'blue';
  public readonly orangeButton:string = 'orange';

  @Output() event = new EventEmitter();
  public changeBgColor(color:string){
    this.event.emit(color);
  }
}


