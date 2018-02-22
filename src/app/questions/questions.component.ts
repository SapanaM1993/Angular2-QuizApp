import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question = {};
  questionNo = 0;

  isFirst = true;
  isLast = false;
  showFinalScore = false;
  totalScore = 0;
  constructor(private questionService: QuestionService) { }

  finalScore = []

  ngOnInit() {
    this.question = this.questionService.getQuestion(this.questionNo);
  }

  submitAnswer(value) {
    console.log("Function called " + this.questionNo + " = " + value);
    this.finalScore.splice(this.questionNo, 1, value);
    console.log(this.finalScore);
    if (this.questionNo + 1 < this.questionService.getQuestions().length) {
      this.questionNo = this.questionNo + 1;
      this.question = this.questionService.getQuestion(this.questionNo);

      this.isFirst = false;
      this.isLast = false;
    }
    else {
      this.isLast = true;
      this.showFinalScore = true;
      this.totalScore = this.finalScore.reduce((sum, item) => sum + item, 0);
      console.log(this.totalScore);
    }
  }

  next(questionId) {
    console.log("Next" + this.questionNo)
    if (this.questionNo + 1 < this.questionService.getQuestions().length) {
      this.questionNo = this.questionNo + 1;
      this.question = this.questionService.getQuestion(this.questionNo);
      this.isFirst = false;
    }
    else {
      this.isLast = true;
      this.showFinalScore = true;
      this.totalScore = this.finalScore.reduce((sum, item) => sum + item, 0);
      console.log(this.totalScore);
    }
  }
  prev(questionId) {
    console.log("Prev" + this.questionNo)
    if (this.questionNo > 0) {
      this.questionNo = this.questionNo - 1;
      this.question = this.questionService.getQuestion(this.questionNo);
      this.isLast = false;
      this.showFinalScore = false;
    }
    else {
      this.isFirst = true;
    }
  }

}
