import { Component, OnInit } from '@angular/core';
import {DataService} from 'app/data.service';
import {Router} from '@angular/router';
import {LoginserviceService} from './loginservice.service';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Class } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private http: Http,private dataservice:LoginserviceService) {}
 public loggedin=false;
  ngOnInit() {

  }
  private accessToken = "z8opgiqNnYwrq2KLU3LH4J3M7NqwZOzb8D102lLAD0DpN4107ur4IS6f6ADFA09e"

   public headers =new Headers();
  loginform(username:string){
        
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('authorization','Bearer '+ this.accessToken);
    this.headers.append('X-Access-Token',this.accessToken)
    var setDefault = "setDefault"
    var options = new RequestOptions({ headers: this.headers });
        this.http.post('http://localhost:3000/api/wallet/'+username+'/setDefault',options)
    .map(data=>{
      data.json();
  alert(data);
  console.log(data.json());

    });

    this.loggedin=true;
    let data =this.dataservice.getstatus('wallet',username);
    console.log(data);    
  
               
  }




}

