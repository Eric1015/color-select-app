import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import RuleScreen from './screens/RuleScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Game: {
        screen: GameScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    Rule: {
        screen: RuleScreen
    }
});

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}

export default App;