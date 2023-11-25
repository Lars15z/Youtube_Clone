import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Shorts from './src/screens/Shorts';
import Registrations from './src/screens/Registrations';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/routes/NavigationContainer';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#0000000D' style="dark" translucent={false} />
      <MyTabs />
    </NavigationContainer>
  );
}
