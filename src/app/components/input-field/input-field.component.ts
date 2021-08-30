import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/activity.model';
import { Priority } from 'src/app/model/priority';


@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  activity!: Activity;
  priority!: Priority[];

  constructor() {

  }

  ngOnInit(): void {
    this.priority = [
      { level: 'alta', value: 3 },
      { level: 'normal', value: 2 },
      { level: 'baixa', value: 1 }
    ]
  }

  addActivity(): void {
    this.activity;
  }
}
