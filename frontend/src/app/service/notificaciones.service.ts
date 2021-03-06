import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notificacion } from '../models/notificaciones';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  private urlBase ="http://localhost:3000/api/notificacion/";
  private urlEmail="http://localhost:3000/api/email/";

  constructor(private _http:HttpClient) { }

  getNotificaciones(usuario:string|null):Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get(this.urlBase+'buscar/?usuario='+usuario,options)
  }
  crearNotificaciones(notificacion:Notificacion):Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }
    const body = JSON.stringify(notificacion)
    return this._http.post(this.urlBase+'crear/',body,options)
  }
  postEmail(email:Email):Observable<any>{

    const options = {
      method: "POST",
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    }
   
    return this._http.post(this.urlEmail, email ,options)
  }
}
