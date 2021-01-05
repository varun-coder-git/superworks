import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Input() totalItems: number = 0;
  constructor() { }
  ngOnInit(): void {

   // console.log(this.totalItems);
    
  }

}
