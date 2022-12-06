import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {
  private _filter: any;     //tässä ei jostain syystä voinut olla string-tyyppinen muuttuja!?
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);   //Raise changed event.
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
}