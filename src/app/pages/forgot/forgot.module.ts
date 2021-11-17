import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ForgotPageRoutingModule } from './forgot-routing.module';

import { ForgotPage } from './forgot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ForgotPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotPage]
})
export class ForgotPageModule {}
