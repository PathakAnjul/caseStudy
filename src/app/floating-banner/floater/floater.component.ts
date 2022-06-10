import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floater',
  templateUrl: './floater.component.html',
  styleUrls: ['./floater.component.css']
})
export class FloaterComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeModal.emit(true)
  }

}
