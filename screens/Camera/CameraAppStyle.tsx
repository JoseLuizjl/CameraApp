import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraStyle: {
    flex: 1,
    alignItems: 'center',
  },
  viewCamera: {
    flex: 1,
    position: 'absolute',
    bottom: 35,
  },
  swapContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 40,
    left: 40,
  },
  buttonSwap: {
    backgroundColor: '#ffffff',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swapIcon: {
    fontSize: 35,
  },
  buttonCamera: {
    backgroundColor: '#ffffff',
    width: 65,
    height: 65,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: '#000000',
    width: 35,
    height: 35,
  },
  photoStyle: {
    height: 100,
    width: 100,
  },
  viewPicture: {
    flex: 1,
  },
});
