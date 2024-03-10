import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './CameraAppStyle';

export default function CameraApp({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [pic, setPic] = useState(photo);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  async function takePicture() {
    if (cameraRef) {
      const picture = await cameraRef.current.takePictureAsync();
      navigation.navigate('HomePage', { pic: picture.uri });
    }
  }
  

  return (
    <View style={styles.container}>
      <Camera style={styles.cameraStyle} type={type} ref={cameraRef}>
        <View style={styles.swapContainer}>
          <TouchableOpacity
            style={styles.buttonSwap}
            onPress={() => {
              setType(
                type === CameraType.back
                  ? CameraType.front
                  : CameraType.back
              );
            }}
          >
            <MaterialIcons name="sync" style={styles.swapIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.viewCamera}>
          <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
            <View style={styles.circle}></View>
          </TouchableOpacity>
        </View>

        {photo && (
          <View style={styles.viewPicture}>
            <Image source={{ uri: photo }} style={styles.photoStyle} />
          </View>
        )}
      </Camera>
    </View>
  );
}
