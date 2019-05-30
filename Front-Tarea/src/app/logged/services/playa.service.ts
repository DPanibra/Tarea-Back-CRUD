import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayaService {

  constructor(private _http: HttpClient) {
    this.getPlayas();
  }

  getPlayas() {
    return this._http.get('https://localhost:44356/api/customers');
  }

  pagarConCulqi(json) {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    headers.set('Bearer', 'tkn_test_1E8sNkBc0qv2b4yv');
    this._http.post('https://api.culqi.com/v2/charges', json, { headers: headers }).subscribe(rpta => {
      console.log(rpta);
    });
  }
  delete(id) {
    return this._http.delete('https://localhost:44356/api/customers/' + id);
  }
  getById(id){
    return this._http.get('https://localhost:44356/api/customers/' + id);
  }
}