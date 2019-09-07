import { Component, OnInit } from '@angular/core';
import { JeuxService } from '../jeux.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
   data:any;
   score:number=0;
   mode:number=0;
   nombreQuestion:number=0;
   pourcentageScore:number=0;
  constructor(private jeuS: JeuxService) { }

  ngOnInit() {
    this.listQuestions()
  }

  listQuestions(){
    this.jeuS.listQuestion()
    .subscribe(resp=>{
      this.data=resp;
      this.nombreQuestion=this.data.length;
    },error=>{
      console.log(error);
    })

  }

  onSelect(question:any,answer:any){
    //console.log(question.id, answer.id);

    this.jeuS.findIdAnswer(question.id)
      .subscribe(resp => {
        console.log("id correct answer "+resp)

        if (resp == answer.id) {
          this.score = this.score + 1;
        }
      })
  }

  valider(){
   this.mode=1
    this.pourcentageScore = (this.score / this.nombreQuestion) *100
  }

}
