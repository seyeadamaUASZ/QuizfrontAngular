import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JeuxService {
  private host:String='http://localhost:8080/';

  constructor(private http:HttpClient) { }

  listQuestion(){
     return this.http.get(this.host+'questions')
     

  }

  //pour une question donnée
  getQuestion(id){
    return this.http.get(this.host+'/questions/'+id)
  }

  //find a correct answer
  findIdAnswer(id){
    return this.http.get(this.host+'findcorrect/'+id)
  }
}
