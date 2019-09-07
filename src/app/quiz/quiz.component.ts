import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  data:any;
  answer:any;
  questionIndex:any=0;
  questionName:any;
  questions:any;
  mode:any=0;
  score:number=0;
  pourcentage:any;
  pager = {
    index:0,
    size:1,
    count:1
  }
  constructor(private jeuS:JeuxService) { }

  ngOnInit() {
    //this.getQuestions();
    this.jeuS.listQuestion()
    .subscribe(resp=>{
      this.data=resp;
      console.log(this.data)
      if(this.data){
        this.questionName = this.data[0].id;
        this.questionIndex=this.questionName;
        this.loadQuestion(this.questionName)
        
      }
    })
  }

  loadQuestion(idquestion:number){
     this.jeuS.getQuestion(idquestion)
     .subscribe(resp=>{
       this.questions = resp;
       console.log(this.questions)
     })

  }

  onSelect(question:any,option:any){
    // l'id de la correcte reponse
      this.jeuS.findIdAnswer(question.id)
      .subscribe(resp=>{
        //la condition à verifier
        if(resp==option.id){
          this.score = this.score+1;
        }
      })
      this.questionIndex=this.questionIndex + 1;
      
  }

  goto(index){
      console.log(index);
      if(index<=this.data.length){
          this.loadQuestion(index)
      }else{
        this.mode=1;
      }
      
  }

  getQuestions(){
    this.jeuS.listQuestion()
    .subscribe(resp=>{
      this.data=resp;
      this.questionIndex = this.data.length;
      console.log(this.data) 
    })
  }
  send(form){
    console.log(form.value);
  }


}
