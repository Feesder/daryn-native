import { StyleSheet, View } from 'react-native';
import { Camcorder, Navbar } from 'entities';

export const Camera = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Camcorder />
        <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});