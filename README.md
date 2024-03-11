# React Native Camera App

## Description

This is a React Native camera application built using Expo. It allows users to access their device's camera and capture photos or videos. 

## Installation

1. Install necessary dependencies:

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
npx expo install react-native-gesture-handler
npx expo install expo-camera
```

2.Open the file `app.json` and check if the camera plugins are added. If they are not added, Add the following plugins to your `app.json` file:  

```json
"plugins": [
  [
    "expo-camera",
    {
      "cameraPermission": "Allow $(PRODUCT_NAME) to access your camera",
      "microphonePermission": "Allow $(PRODUCT_NAME) to access your microphone",
      "recordAudioAndroid": true
    }
  ]
]
```

## Usage

Run the following command to start the application:

```bash
npx expo start
```

## Dependencies

- [React Navigation](https://reactnavigation.org/) - Routing and navigation for your React Native apps.
- [Expo Camera](https://docs.expo.dev/versions/latest/sdk/camera/) - Provides access to the device's camera.
- [React Native Gesture Handler](https://docs.expo.dev/versions/latest/sdk/gesture-handler/) - React Native library providing native-driven gesture management.

