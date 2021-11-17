import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsPage } from './news.page';

import { NewsPageRoutingModule } from './news-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NewsPageRoutingModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
