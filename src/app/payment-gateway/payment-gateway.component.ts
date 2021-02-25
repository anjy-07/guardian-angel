import { Component, Input, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import * as EventEmitter from "events";

@Component({
    selector: 'app-payment-gateway',
    templateUrl: './payment-gateway.component.html',
    styleUrls: ['./payment-gateway.component.scss']
})

export class PaymentGatewayComponent implements OnInit {

    @Input() amountLimit: number;
    @Input() totalAmount: number;

    @Output() processPaymentEvent: any;

    ngOnInit() {

    }

    processPayment() {
        // TODO: Redirect to successful payment window
        this.processPaymentEvent.emit(this.totalAmount);
    }
}