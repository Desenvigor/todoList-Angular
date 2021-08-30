import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/activity.model';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  
  activity!: Activity;

  constructor() { }

  ngOnInit(): void {
  }

  addActivity(activity: Activity): void{
    this.activity = activity;
  }
}
