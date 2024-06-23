# Welcome to Contact App

## Setup

1. use this template or clone this repo

```bash
git clone https://github.com/aqilfiqran/rn-mobile-starter.git "your-project-name"
```

2. enter the directory

```bash
cd "your-project-name"
```

3. install dependencies

```bash
yarn install
```

4. rename bundler and project app name

```bash
npx react-native-rename <ProjectApp> -b <com.projectapp>
```

5. create keystore

```bash
keytool -genkey -v -keystore contact.keystore -storepass contact1234 -alias contact -keypass contact1234 -keyalg RSA -keysize 2048 -validity 10000
```

6. generate icon [here](https://icon.kitchen/i/H4sIAAAAAAAAA02OsQrDMAxE%2F%2BW6Zu2StXOhkGylgxLLjokdBdtpKSH%2FXtulUA3i9Dh0t%2BNJbuOIdoeiMPcTe0aryUVuoE3%2FXvMJ68kwGgw%2FMIqTUMGlqhYnXSczbbqRnF1M8fGSuBi1uVKc%2Fz7fSKnq2ZFkRXtuEKyZUlWDpCS%2BSse6sKNkdRN9020YHSMzL2pzpf4dtKggVuUsKzHvFw94HB%2FD%2BmB44QAAAA%3D%3D)

## Run on Android

```bash
# for the first time, copy .env.development to .env. you don't need to do this if you already have .env file
cp .env.development .env

# default dev environment
yarn android

# another environment
yarn android:staging:debug
yarn android:production:debug
```

## Run on iOS

```bash
# default dev environment
yarn ios

# another environment
yarn ios:staging:debug
yarn ios:production:debug
```

## Build APK

```bash
yarn release:android:development
yarn release:android:staging
yarn release:android:production
```

## Build IPA

Noted: you need to have an Apple Developer Account to build IPA

- open `ios/ContactApp.xcworkspace` with Xcode
- select `ContactApp` target
- select `Generic iOS Device` as target device
- go to `Product` -> `Archive`
- send to App Store or test with `TestFlight`

## Note

<!-- ini adalah best practice react native starter saya yang dikombinasikan dengan boilerplate ignite -->

This project is a boilerplate for React Native project. It's using Ignite as a boilerplate and best practice from me.

## The latest and greatest boilerplate for Infinite Red opinions

This is the boilerplate that [Infinite Red](https://infinite.red) uses as a way to test bleeding-edge changes to our React Native stack.

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

## Quick Start

The Ignite boilerplate project's structure will look similar to this:

```
ignite-project
├── app
│   ├── components
│       ├── atoms
│       ├── molecules
│       ├── organisms
│   ├── config
|   ├── devtools
│   ├── i18n
│   ├── libs
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   ├── app.tsx
├── test
│   ├── mockFile.ts
│   ├── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   └── templates
|       |── app-icon
│       ├── component
│       ├── model
│       ├── navigator
│       └── screen
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env.development
├── .env.production
├── .env.staging
└── package.json
```
