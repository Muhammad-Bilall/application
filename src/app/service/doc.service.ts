import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private _http:HttpClient) { }
  addPatient(data:any):Observable<any>{
    return this._http.post('https://64761b98e607ba4797dd4ff1.mockapi.io/patient-data',data);
  }
  getPatientList():Observable<any>{
    return this._http.get('https://64761b98e607ba4797dd4ff1.mockapi.io/patient-data');
  }
}
