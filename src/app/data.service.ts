import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from './configuration';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';

@Injectable()
export class DataService<Type> {
    private resolveSuffix: string = '?resolve=true';
    private actionUrl: string;
    private headers: Headers;
    private accessToken = "3YUvZT8QH8WNgqwrkJdN1pzzS8UpxzHa5xWq9FGWV1k3x7QrqEH5ZqyTemPcDMiN"

    constructor(private http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('authorization','Bearer '+ this.accessToken);
        this.headers.append('X-Access-Token',this.accessToken)
    }
    public getstatus(ns: string,usercard:string){
        var options = new RequestOptions({ headers: this.headers });
        return this.http.get(`http://localhost:3000/api/wallet`).
        map(this.extractData).catch(this.handleError);
    }
    public loginByCard(ns: string,usercard:string):Observable<any[]>{
        var setDefault = "setDefault"
        var options = new RequestOptions({ headers: this.headers });
        return this.http.post('http://localhost:3000/api/wallet/'+usercard+'/setDefault',usercard)
        .map(this.extractData).catch(this.handleError);
    }
    public getAll(ns: string): Observable<Type[]> {
        var options = new RequestOptions({ headers: this.headers });
        console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns);
        return this.http.get(`${this.actionUrl}${ns}`,options)
          .map(this.extractData)
          .catch(this.handleError);
    }

    public getSingle(ns: string, id: string): Observable<Type> {
        console.log('GetSingle ' + ns);

        return this.http.get(this.actionUrl + ns + '/' + id + this.resolveSuffix)
          .map(this.extractData)
          .catch(this.handleError);
    }

    public add(ns: string, asset: Type): Observable<Type> {
        console.log('Entered DataService add');
        console.log('Add ' + ns);
        console.log('asset', asset);

        return this.http.post(this.actionUrl + ns, asset)
          .map(this.extractData)
          .catch(this.handleError);
    }

    public update(ns: string, id: string, itemToUpdate: Type): Observable<Type> {
        console.log('Update ' + ns);
        console.log('what is the id?', id);
        console.log('what is the updated item?', itemToUpdate);
        console.log('what is the updated item?', JSON.stringify(itemToUpdate));
        return this.http.put(`${this.actionUrl}${ns}/${id}`, itemToUpdate)
          .map(this.extractData)
          .catch(this.handleError);
    }

    public delete(ns: string, id: string): Observable<Type> {
        console.log('Delete ' + ns);

        return this.http.delete(this.actionUrl + ns + '/' + id)
          .map(this.extractData)
          .catch(this.handleError);
    }

    private handleError(error: any): Observable<string> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res: Response): any {
        return res.json();
    }



}
