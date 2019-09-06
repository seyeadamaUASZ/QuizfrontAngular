import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {
  private host:String='http://localhost:8080/';

  constructor(private http:HttpClient) { }

  listQuestion():Observable<any>{
      return this.http.get(this.host+'questions')

  }
}
