/**
 * InfiniteGAN
 * Reads image from various GAN sources kanged from the web
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import infiniteCat from './InfiniteCat';
import infiniteWaifu from './InfiniteWaifu';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === "Cat" ) {
              iconName = 'logo-octocat';
            } else if (route.name === "Waifu") {
              iconName = 'heart';
            }

            return <Icon name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions = {{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
        
        >
          <Tab.Screen name="Cat" component={infiniteCat} />
          <Tab.Screen name="Waifu" component={infiniteWaifu} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

class Colors {
  static white = "#ffffff"
}