import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss'],
})
export class NewsPage implements OnInit{
  
constructor(public router: Router) {}

ngOnInit() {
  
  }
  openNews() {
    this.router.navigate(['/news']);
  }
}
