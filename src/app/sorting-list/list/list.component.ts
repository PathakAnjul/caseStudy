import { Component } from '@angular/core';
import { data } from './data'

type sortCounter = 0 | 1 | 2;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  title = 'prj-assign';
  headers: any;
  tableData: any;
  countFilter: sortCounter = 0;


  constructor() {

  }

  ngOnInit() {
    this.tableData = [...data];
    if (this.tableData.length > 0) {
      this.headers = Object.keys(this.tableData[0]);
    }
  }


  sort(column: any) {
    switch (this.countFilter) {
      case 0: {
        this.sortAscending(column);
        this.countFilter = 1;
        break;
      };
      case 1: {
        this.sortDescending(column);
        this.countFilter = 2;
        break;
      };
      case 2: {
        this.reset(column);
        this.countFilter = 0;
        break;
      };
      default: {
        this.reset(column);
        this.countFilter = 0;
        break;
      }
    }
  }

  sortAscending(column: any) {
    for (let row of this.tableData) {
      if (typeof row[column] == 'string') {
        this.tableData.sort((a: string, b: string) => a[column].localeCompare(b[column]));
      }
      else if (typeof row[column] == 'number') {
        this.tableData.sort((a: any, b: any) => a[column] - b[column]);
      }
    }
  };
  sortDescending(column: any) {
    for (let row of this.tableData) {
      if (typeof row[column] == 'string') {
        this.tableData.sort((a: string, b: string) => -1 * a[column].localeCompare(b[column]));
      }
      else if (typeof row[column] == 'number') {
        this.tableData.sort((a: any, b: any) => b[column] - a[column]);
      }
    }
  }
  reset(column: any) {
    this.tableData = [...data];
  };

}
