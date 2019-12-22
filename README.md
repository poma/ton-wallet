# TON validated wallet

Managing private keys for cryptocurrency might be confusing for new users so we decided to improve user experience by implementing a non-custodial wallet that supports 2 Factor Authentication through a Telegram bot and Private Key Recovery.

Our solution allows to user safe managing of his crypto wallet with lesser risks than classical banking and without any 3rd party custodianship.

## Here’s how it looks like:

A user submits his transaction to the TON wallet as usual, and shortly after that receives a notification from a telegram bot, tied to this wallet. When the user clicks confirm his transaction is executed.

The bot also allows the user to recover his keys in case he lost them, even though the bot itself doesn’t have control over the wallet. 

#### This is achieved by some kind of game theory

1. Together user and validator could perform the transactions instantly
2. The validator can replace the user's public key by executing a long time transaction (for example, 2 monthes)
3. User can replace validator's public key by executing a long time transaction with half time of (2) duration.
4. Together user and validator can cancel all pending transactions

### Issues, solved by our wallet

1. User lost his private key
> Validator recovers the key.

2. The private key has been stolen (copied)
> Both validator and user cancel all hacker's pending requests and update user's key

3. Validator goes offline or does something wrong
> User can get control over the wallet faster than the validator

### Security considerations

This is a hot wallet that is designed to be used regularly. If user goes offline for extended periods of times (multiple months), the validator will have an opportunity to execute a transaction that changes user keys and successfully wait for timeout without user noticing.

## Deploy

```sh
cd contract
./build.sh
# transfer money to account
./deploy.sh
```
