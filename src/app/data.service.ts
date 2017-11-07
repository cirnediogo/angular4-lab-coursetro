import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'Ford', 'Fiat', 'Chevrolet'
  ];

  logService() {
    return "This is the Car Data Service";
  }

}
