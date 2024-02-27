import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'widgets'

export const CameraPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Camera navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});