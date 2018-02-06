import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';


@Injectable()
export class LoginserviceService {

  constructor(private dataservice:DataService<any[]>) { }

  

  public getstatus(ns:string,usercard:string){

    return this.dataservice.getstatus(ns,usercard);
  }

}
