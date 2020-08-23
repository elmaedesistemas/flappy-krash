import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Platform, Dimensions } from 'react-native';

import GameScreen from './screens/GameScreen'

const SCREEN_HEIGHT = Dimensions.get('window').height;
const defaultScreenOptions =
    Platform.OS === 'ios'
        ? ({ route, navigation }) => ({
            gestureEnabled: true,
            gestureResponseDistance: { vertical: SCREEN_HEIGHT, horizontal: 50 },
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStatusBarHeight: navigation.dangerouslyGetState().routes.indexOf(route) > 0 ? 10 : undefined,
            ...TransitionPresets.ModalPresentationIOS,
        })
        : undefined;
const defaultStackScreenOptions =
    Platform.OS === 'ios'
        ? {
            gestureEnabled: true,
            cardOverlayEnabled: true,
            cardStyle: { backgroundColor: '#FFFFFF' },
            headerStatusBarHeight: 10,
        }
        : undefined;

const GameScreenStack = createStackNavigator();
const GameScreenRoot = () => (
    <GameScreenStack.Navigator screenOptions={defaultStackScreenOptions}>
        <GameScreenStack.Screen name="GameScreen" component={GameScreen} options={{ headerShown: false }} />
    </GameScreenStack.Navigator>
);

const RootStack = createStackNavigator()
const Navigation = () => (
    <RootStack.Navigator screenOptions={defaultScreenOptions} initialRouteName="GameScreenRoot">
        {/* stacks */}
        <RootStack.Screen name="GameScreenRoot" component={GameScreenRoot} options={{ headerShown: false, animationEnabled: false }} />
    </RootStack.Navigator>
)

export default Navigation
