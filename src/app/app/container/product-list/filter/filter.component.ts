import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input()

  all: number = 0;
  
  @Input()
  
  inStock: number = 0;
  
  @Input()
  
  outOfStock: number = 0;

  @Output()
  
  selectedFilterRadioButtonChanged: EventEmitter<string>= new EventEmitter<string>(); 

  selectedFilterRadioButton: string = 'all';
  
  onSelectedFilterRadioButtonChanged(){
    
     this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
