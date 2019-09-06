import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../jeux.service';
import { Question } from '../models/question.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  data:any;
  answer:any;
  identifiant:any;
  element:Question=new Question();
  selectedAnswer:any;
  constructor(private jeuS:JeuxService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    this.jeuS.listQuestion()
    .subscribe(resp=>{
      this.data=resp;
    })
  }
  send(form){
    console.log(form.value);
  }

  selectanswer(event) {
    this.selectedAnswer = event;
  }

}
