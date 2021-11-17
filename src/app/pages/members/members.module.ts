import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MembersPage } from './members.page';

import { MembersPageRoutingModule } from './members-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MembersPageRoutingModule
  ],
  declarations: [MembersPage]
})
export class MembersPageModule {}
