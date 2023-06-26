import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  @Input() all: number = 0;
  @Input() cake: number = 0;
  @Input() cupcake: number = 0;
  @Input() bakedGoods: number = 0;
  @Input() seasonalOffers: number = 0;

  selectedRadioButtonValue: string = 'All';

  @Output() filterRadioButtonSelection: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelection () {
    this.filterRadioButtonSelection.emit(this.selectedRadioButtonValue);
    //console.log (this.selectedRadioButtonValue)//
  }

}
