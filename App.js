
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterUser from './src/screens/RegisterUser';
import PhoneNumber from './src/screens/PhoneNumber';

const Stack = createNativeStackNavigator();





function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;