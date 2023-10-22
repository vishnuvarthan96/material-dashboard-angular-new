import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  standalone:true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,CommonModule],
})
export class TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   table:any[]=[
    {
      'id':1
    },
    {
      'id':2
    },
    // {
    //   'id':3
    // },
    // {
    //   'id':4
    // }
   ]

}
