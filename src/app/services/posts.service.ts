import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostInteface } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/post';
  /** */
  getAllPost(){
    return this.http.get<PostInteface[]>(this.url)
  }
}
