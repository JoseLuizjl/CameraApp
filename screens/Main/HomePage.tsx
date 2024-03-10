import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCameraContainer: {
    position: 'absolute',
    bottom: 40,
  },
  btnCamera: {
    borderColor: '#000000',
    borderRadius: 50,
    borderWidth: 2,
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    fontSize: 35,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 12,
  },
});

