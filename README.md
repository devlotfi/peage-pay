![peage-pay-logo](https://github.com/devlotfi/peage-pay/blob/master/github-assets/repository-cover.jpg)

# PeagePay

## About the project
PeagePay is a highway toll management system that includes all essential features likes (admin panel, payement system...)

## Authors

- DEBBAL Lotfi
- TEHAR Ahmed

# How to use
In this section we will explain how to run the apps

## Prerequisites
- Node Js (v21.7.3) or higher
- Yarn package manager
- PostgreSQL
- Redis (Only required when running `peage-pay-server` and not `peage-pay-server-local`)
- Ngrok (Only for the payment system to work)

### How to enable yarn package manager
On windows open a terminal window as administrator and run 
```
corepack enable
```

## Installing dependencies
There are 4 main packages
- peage-pay-server
- peage-pay-server-local
- peage-pay-web
- peage-pay-mobile

***NOTE:*** The difference between `peage-pay-server` and `peage-pay-server-local` is that `peage-pay-server-local` is a simplified version that does dot require **Redis**

In each package run the command
```
yarn
```

## Configuring environement variables
In each app you might find a `.env` file with env variables that have `COMPLETE_THIS_FIELD` in them, you have to complete them with you own configuration instead

## Running the apps
In each app project you can find the appropriate command to run the app in `package.json`

### Payment System 
For the payment system to work you have to configure the webhook url for the ***Chargily Pay*** API in the dashboard
You will also need to configure the public url for the webhook and put it in the `ngrok` script in the `package.json` of `peage-pay-server`

### Mobile app
The pc which runs the server and the phone which runs the app must be on the same network
After running the app the url, of the server might not be configured correctly
To solve this we take these steps:
- Get the ipv4 of you pc that runs the server using `ipconfig` on windows
- While running the mobile app turn off the internet on your phone, a special UI will appear that will let you configure the url of the server for HTTP and Websocket
For example you might write
- `http://192.168.1.33:3000` for http
- `ws://192.168.1.33:3000` for websocket
- Then turn on the internet on the phone and rerun the app



