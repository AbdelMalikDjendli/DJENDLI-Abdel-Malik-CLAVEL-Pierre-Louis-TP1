import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MalikPierrelouisTP1';
  public bgColor: string | undefined;

  ngOnit(){
    this.bgColor = 'defaultBgColor';
  }

  public changeBgColor(color:string)
  {
    this.bgColor = color;
  }
}



