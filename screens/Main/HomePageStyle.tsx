import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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

