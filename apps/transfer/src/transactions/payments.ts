import { TxnOptions } from "../models"
import { getClient } from "../xrpl-client"
import { Payment } from "xrpl"

const client = getClient()

type PaymentProps = Omit<Payment, 'TransactionType' | 'Account'>

export const sendPayment = async (props: PaymentProps, {wallet}: TxnOptions) => {
    //Prepare the transaction
    const payment: Payment = {
        ...props,
        TransactionType: 'Payment',
        Account: wallet.address,
    }

    const prepared = await client.autofill(payment)

    //sign
    const signed = wallet.sign(prepared)

    // submit and wait for validation
    const response = await client.submitAndWait(signed.tx_blob)
    console.log(response)
    return response
}