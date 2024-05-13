import {Client} from 'xrpl'
let client:Client

const networks = {
    TESTNET: 'wss://s.altnet.rippletest.net:51233/',
    MAINNET: 'wss://s2.ripple.com/',
    DEVNET: 'wss://s.devnet.rippletest.net:51233/'
}

// Function to get the client
export const getClient = () => {
    if(!client) {
        client = new Client(networks.TESTNET)
    }

    return client
}