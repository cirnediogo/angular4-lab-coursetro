import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'My First Angular App';
  person = {
    name: 'Diogo',
    gender: 'male',
    age: 26,
    location: 'Brasil',
    height: false
  };
  numbers = [10,20,100];
  
  angularLogo = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
  btnStatus = 'disabled';

  bindEvent(event) {
    alert(event);
  }

  redTextClass = "red-text";
  redTextClassActive = true;
  multipleClasses = {
    'red-text': true,
    'italic-text': true
  };

  redTextStyle = 'red';
  redTextStyleActive = true;
  multipleStyles = {
    'color': 'red',
    'font-style': 'italic'
  };

  constructor(private dataService: DataService) {
  }

  serviceLog:string = '';

  getCarsData() {
    return this.dataService.cars;
  }

  ngOnInit() {
    this.serviceLog = this.dataService.logService();
  }

}
