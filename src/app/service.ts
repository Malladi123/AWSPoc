import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { Car } from '../app/domain/car';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) { }

    getCars() {
        return this.http
            .get<{ data: Car[]; }>('../assets/dataList.json')
            .map(res => <Car[]>res.data);
    }
}
