import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/Home/HomeScreen';
import { MovieScreen } from './screens/Movie/MovieScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{ title: 'Movie' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
