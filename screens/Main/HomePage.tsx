import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { styles } from './HomePageStyle';

export default function HomePage({navigation}) {
  const route = useRoute();
  const pic = route.params?.pic;

  return (
    <View style={styles.container}>
      <View>
      <Image source={{ uri: pic }} style={styles.image} />
    </View>

  <View style={styles.btnCameraContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('CameraApp')} style={styles.btnCamera}>
        <MaterialIcons name="photo-camera" style={styles.cameraIcon} />
    </TouchableOpacity>
  </View>

</View>
  );
}
