import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  navItems = ["men", "women", "kids", "sale", "customize"]
  constructor() { }

  ngOnInit(): void {
  }
}
