import { Component } from '@angular/core';
import { Socialposts } from './socialposts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialposts';
  posts: Socialposts[];

  newTitle: string = '';
	newThought: string = '';
	newPostMode: boolean = false;

  constructor() {
    this.posts = [
      { title: 'Testing', thought: 'This is hard'},
      { title: 'Next post', thought: 'I am tired'},
      { title: 'Third post', thought: 'I want to watch Book of Boba Fett'}
    ]
  }

  createNewPost(){
    this.newPostMode = true;
  }

  savePost(){
    if (this.posts){
      this.posts.unshift(
        {title: this.newTitle, thought: this.newThought}
      )
    }
    this.newPostMode = false;
  }

}
