import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogContent: any = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.blogContent = this.sharedService.blogContent;
  }
}
