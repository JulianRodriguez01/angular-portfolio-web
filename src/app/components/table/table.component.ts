import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  data = [
    { area: '1', name: 25, level: 'a' },
    { area: '1', name: 30, level: 'b' },
    { area: '1', name: 35, level: 'c' },
    { area: 'Bob', name: 35, level: 'c' },
    { area: 'Bob', name: 35, level: 'c' },
    { area: 'Bob', name: 35, level: 'c' }
  ];



}
