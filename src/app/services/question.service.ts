import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  private URL: string = '/questionList.json';


  private questionSet = {
    "questions": [
      {
        "id": 1,
        "name": "AngularJS is a library?",
        "options": [
          {
            "name": "True",
            "value": 1
          },
          {
            "name": "False",
            "value": 2
          }
        ]
      },
      {
        "id": 2,
        "name": "Which of the following directive is used to initialize an angular app?",
        "options": [
          {
            "name": "ng-model",
            "value": 1
          },
          {
            "name": "ng-app",
            "value": 2
          },
          {
            "name": "ng-controller",
            "value": 3
          },
          {
            "name": "None",
            "value": 4
          }
        ]
      },
      {
        "id": 3,
        "name": "ng-app directive defines and links an AngularJS application to HTML?",
        "options": [
          {
            "name": "True",
            "value": 1
          },
          {
            "name": "False",
            "value": 2
          }
        ]
      },
      {
        "id": 4,
        "name": "AngularJS supports two-way data binding?",
        "options": [
          {
            "name": "True",
            "value": 1
          },
          {
            "name": "False",
            "value": 2
          }
        ]
      },
      {
        "id": 5,
        "name": "AngularJS is an MVC based framework?",
        "options": [
          {
            "name": "True",
            "value": 1
          },
          {
            "name": "False",
            "value": 2
          }
        ]
      },
      {
        "id": 6,
        "name": "AngularJS expressions are written using?",
        "options": [
          {
            "name": "double braces like {{ expression}}",
            "value": 1
          },
          {
            "name": "single braces like {expression}",
            "value": 2
          },
          {
            "name": "small bracket like (expression)",
            "value": 3
          },
          {
            "name": "capital bracket like [expression]",
            "value": 4
          }
        ]
      },
      {
        "id": 7,
        "name": "AngularJS bootstraps itself during config phase?",
        "options": [
          {
            "name": "True",
            "value": 1
          },
          {
            "name": "Falser",
            "value": 2
          }
        ]
      }
    ]
  }


  private lastQuestion = {
    "id": 4
    "name": "This is last Question?",
    "options": [
      {
        "name": "Submit",
        "value": 1
      },
      {
        "name": "Cancel",
        "value": 2
      }
    ]
  };


  constructor(private http: Http) { }

  getQuestions() {
    return this.questionSet.questions;
  }

  getQuestion(no) {
    if (no < this.questionSet.questions.length) {
      return this.questionSet.questions[no];
    }
    else {
      return this.lastQuestion;
    }
  }



}
