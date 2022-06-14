import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

export function getPosts() {
  const http = inject(HttpClient);
  return http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts?userId=1');
}

@Component({
  selector: 'app-basic-di',
  templateUrl: './basic-di.component.html',
  styleUrls: ['./basic-di.component.scss'],
  standalone: true,
  imports: [CommonModule, MatListModule],
})
export class BasicDIComponent {
  readonly posts$: Observable<Array<Post>> = getPosts();
}
