import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'unit-testing-cbt';
  item1 = '3';
  item2 = '4';
  item3 = '5';
  totalPrice = 0;
  shoppingCart = this.fb.group({
    item1: [this.item1, Validators.pattern('^[0-9]*$')],
    item2: [this.item2, Validators.pattern('^[0-9]*$')],
    item3: [this.item3, Validators.pattern('^[0-9]*$')]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
       this.convertToNumbersAndCalculate();
    }

  // tslint:disable-next-line:typedef
  convertToNumbersAndCalculate() {
    const i1 = Number.parseInt(this.item1);
    const i2 = Number.parseInt(this.item2);
    const i3 = Number.parseInt(this.item3);
    this.totalPrice = this.calculateTotalWithTax(1.06, i1, i2, i3);
  }
  calculateTotalWithTax(taxRate, ...itemPrices): number {
    return itemPrices.reduce((a, b) => {
      return a + b;
    }) * taxRate;
  }

  showItem() {
    console.log(this.shoppingCart.controls);
  }
}
