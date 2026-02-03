import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts = [
    {
      title: 'Angular Basics',
      description: 'Learn the fundamentals of Angular components and templates.'
    },
    {
      title: 'Routing in Angular',
      description: 'Understand how navigation works in Angular.'
    },
    {
      title: 'Component Styling',
      description: 'Style components using scoped SCSS.'
    }
  ];

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}
