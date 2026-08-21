import { Component, inject, signal } from '@angular/core';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostInteface } from '../../../model/post';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
postInteface=signal<PostInteface[]>([]);
postsService=inject(PostsService);
ngOnInit() {
this.postsService.getAllPost().subscribe((data)=>{
  this.postInteface.set(data)
})
}
}
