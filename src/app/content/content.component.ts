import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  title: String = '';
  content: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.title = data['title'];
      this.content = data['content'];

    });

 
  }


}
