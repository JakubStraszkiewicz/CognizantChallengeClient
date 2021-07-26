import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Attempt } from '../../model/attempt';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.scss'],
})
export class SolveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {
  }

  public selected: Attempt = {id:"", userName: "",name:"" ,description: "", solution: ""};
  public name: string = "";
  public task: Attempt = {id:"",userName: "" ,name:"" ,description: "", solution: ""};
  public solution: string = "";
  
  public empForm = this.formBuilder.group({
    name: [null, Validators.required],
    ta: [null, Validators.required],
    sol: [null, Validators.required]
  });

  tasks: Attempt[] = [
    {id: '1', userName: "", name: 'Fibonacci', description: 'make fibonacci', solution: ""},
    {id: '2',userName: "", name: 'Randomizer', description: 'make randomizer', solution: ""},
    {id: '3',userName: "", name: 'Weighted average', description: 'make average', solution: ""}
  ];

  onFormSubmit(formDirective: FormGroupDirective) {
    if(this.empForm.valid) {
      this.selected.solution = this.solution;
      this.selected.userName = this.name;
      
      this.taskService.saveTask(this.selected);

      this.selected = {id:"",userName: "" ,name:"" ,description: "", solution: ""};
      formDirective.resetForm();
      this.empForm.reset();
    }
  }

  ngOnInit(): void {
  }
}
