# Welcome to your mobile starter app!

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
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   ├── app.tsx
├── test
│   ├── __snapshots__
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
├── .env
└── package.json

```

### ./app directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the `app` directory looks similar to the following:

```
app
├── components
├── config
├── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
├── app.tsx
```

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find templates you can customize to help you get started with React Native.

### ./test directory

This directory will hold your Jest configs and mocks.
