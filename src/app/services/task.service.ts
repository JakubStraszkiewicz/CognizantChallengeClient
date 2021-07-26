import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Attempt } from '../model/attempt';
import { Score } from '../model/score-response';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class TaskService {
  constructor(private http: HttpClient) { }

  private urlBase = "https://localhost:44333/api/attempts";

  saveTask(task: Attempt) {
    return this.http.post <Attempt> (this.urlBase,task).
    subscribe(result => { 
      console.log("Posted" + JSON.stringify(result)); }, 
      error => console.error(error));;
  }

  getLeaders() {
    return this.http.get<Score[]>(this.urlBase + '/leader');
  }
}