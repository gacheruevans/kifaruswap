import { sendPayment } from './transactions'
import { WALLET_2, WALLET_1 } from './wallet'
import { getClient } from './xrpl-client'

const client = getClient()

const main = async () => {
  await client.connect()

  await sendPayment({
    Destination: WALLET_2.address,
    Amount: '10',
  },{wallet: WALLET_1})

  await client.disconnect()
}

main()