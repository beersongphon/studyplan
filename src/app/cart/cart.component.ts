import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService, CartItem } from './../shared/shopping-cart.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../checkout/checkout-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() state: any;

  constructor(private shoppingCartService: ShoppingCartService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  checkout(): void {
    // this.shoppingCartService.checkout();
    let dialogRef = this.dialog.open(CheckoutDialogComponent, {
      // data: { state: this.state }, // now uses the observable
      height: '400px',
      width: '600px',
    });
  }
}
