import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TMM022Component } from './tmm022.component';

@NgModule({
  declarations: [TMM022Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TMM022Component]
})
export class TMM022Module { }
