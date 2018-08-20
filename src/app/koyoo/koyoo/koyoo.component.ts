import { Component, OnInit } from '@angular/core';
import { KoyooMaxwel } from '../../koyoo-maxwel';
import { UserCardComponent } from '../../user-card/user-card.component';

@Component({
  selector: 'app-koyoo',
  templateUrl: './koyoo.component.html',
  styleUrls: ['./koyoo.component.css']
})
export class KoyooComponent implements OnInit {

  koyoo: string;

  constructor() { }

  ngOnInit() {
  }

}
