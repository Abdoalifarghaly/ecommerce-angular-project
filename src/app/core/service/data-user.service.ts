import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {
  username:BehaviorSubject<string>=new BehaviorSubject<string>('')

  constructor() { }
}
