import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SingupPageRoutingModule } from './singup-routing.module';

import { SingupPage } from './singup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SingupPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SingupPage]
})
export class SingupPageModule {}
