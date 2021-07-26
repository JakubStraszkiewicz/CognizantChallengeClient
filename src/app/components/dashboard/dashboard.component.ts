import { Component, OnInit } from '@angular/core';
import { Score } from '../../model/score-response';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  scores: Score[] = [];

  ngOnInit(): void {
    this.taskService.getLeaders().subscribe((data: Score[]) => 
    this.scores = data);
  }

}
