import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ShoppingCartService } from './../shared/shopping-cart.service';
import { Observable, of } from 'rxjs';
import { switchMap, shareReplay, share, take } from 'rxjs/operators';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent implements OnInit {
  state = this.shoppingCartService.state$.pipe();

  // @Inject(MAT_DIALOG_DATA) public data: any,
  constructor(private shoppingCartService: ShoppingCartService,
    private dialogRef: MatDialogRef<CheckoutDialogComponent>) { }

  ngOnInit(): void {

  }

  completeOrder() {
    this.shoppingCartService.checkout();
  }

}
