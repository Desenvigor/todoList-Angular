import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/activity.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  activity!: Activity[]

  constructor() { }

  ngOnInit(): void {
  }

}
