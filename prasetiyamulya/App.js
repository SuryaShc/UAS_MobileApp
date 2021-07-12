import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


import SplashScreen from './screens/1_SplashScreen';
import OnBoarding1 from './screens/1_OnBoarding1';
import OnBoarding2 from './screens/1_OnBoarding2';
import OnBoarding3 from './screens/1_OnBoarding3';

import LoginScreen from './screens/2_LoginScreen';
import RegisterScreen from './screens/2_RegisterScreen';

import DoneRegister from './screens/3_DoneRegisterScreen';
import HomeScreen from './screens/3_HomeScreen';
import Courses from './screens/3_CoursesScreen'; 
import More from './screens/3_MoreScreen';
import Settings from './screens/3_SettingScreen';

import Notification from './screens/4_NotificationScreen';
import Todays_Selection from './screens/4_Todays_Selection';
import Info from './screens/4_Info';
import Announcement from './screens/4_Announcement';

import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

export default App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        {user ?
          <>
            {/* 3_HomeScreen with navigator*/}
            <Stack.Screen name="Home" options={{ headerShown: false, }}>
              {props => <HomeScreen {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Courses" options={{ headerShown: false, }}>
            {props => <Courses {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="More" options={{ headerShown: false, }}>
            {props => <More {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Settings" options={{ headerShown: false, }}>
            {props => <Settings {...props} user={user} />}
            </Stack.Screen>
            {/* 4_Home Detail*/}
            <Stack.Screen name="Notification" options={{ headerShown: false, }}>
            {props => <Notification {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Info" options={{ headerShown: false, }}>
            {props => <Info {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Announcement" options={{ headerShown: false, }}>
            {props => <Announcement {...props} user={user} />}
            </Stack.Screen>
            <Stack.Screen name="Todays_Selection" options={{ headerShown: false, }}>
            {props => <Todays_Selection {...props} user={user} />}
            </Stack.Screen>

            
            <Stack.Screen name="DoneRegister" options={{ headerShown: false, }}>
            {props => <DoneRegister {...props} user={user} />}
            </Stack.Screen>
          </> :

          <>
            {/* 1_SPlashScreen */}
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Boarding1" component={OnBoarding1} options={{headerShown: false}} />
            <Stack.Screen name="Boarding2" component={OnBoarding2} options={{headerShown: false}} />
            <Stack.Screen name="Boarding3" component={OnBoarding3} options={{headerShown: false}} />
            
            {/* 2_ User creation and authentication */}
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false }}/>
            
          </>
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
};