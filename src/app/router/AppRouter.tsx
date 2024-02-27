import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CameraPage, MapPage, InfoPage } from 'pages';

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={CameraPage} />
        <Stack.Screen name="Map" component={MapPage} />
        <Stack.Screen name="Info" component={InfoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}