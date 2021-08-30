import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/model/activity.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() activity!:Activity

  constructor() { }

  ngOnInit(): void {
  }

}
