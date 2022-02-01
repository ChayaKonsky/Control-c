import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyComponent } from './copy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({

  declarations: [CopyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[CopyComponent]
})
export class CopyModule { }
