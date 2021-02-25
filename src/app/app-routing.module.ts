import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';


const routes: Routes = [
  // TODO: If routing approach consider then uncomment this
  // {
  //   path: '/payment-gateway/:amountLimit/:totalAmount',
  //   component: PaymentGatewayComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
