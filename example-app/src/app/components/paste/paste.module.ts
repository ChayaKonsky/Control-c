import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasteComponent } from './paste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PasteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[PasteComponent]
})
export class PasteModule { }
