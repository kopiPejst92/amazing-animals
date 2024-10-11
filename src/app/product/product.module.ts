import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './product-list/product-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule, 
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule
  ]
})

export class ProductModule { }
