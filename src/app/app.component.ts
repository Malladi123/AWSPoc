import { Component, OnInit } from '@angular/core';
import { Car } from './domain/car';
import { CarService } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: any = [];
  constructor(private _carService: CarService) {

  }


  listData() {
    this._carService.getCars().subscribe(cars => {
      this.cars = cars;
      console.log(' this.cars', cars);

    });
  }

}
