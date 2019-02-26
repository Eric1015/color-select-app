import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import RuleScreen from './screens/RuleScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Game: {
        screen: GameScreen
    },
    Rule: {
        screen: RuleScreen
    }
});

export default createAppContainer(AppNavigator);