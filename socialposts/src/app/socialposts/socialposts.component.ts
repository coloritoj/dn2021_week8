import { Component, Input, OnInit } from '@angular/core';
import { Socialposts } from '../socialposts';

@Component({
  selector: 'app-socialposts',
  templateUrl: './socialposts.component.html',
  styleUrls: ['./socialposts.component.css']
})
export class SocialpostsComponent implements OnInit {

  @Input() post: Socialposts | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
