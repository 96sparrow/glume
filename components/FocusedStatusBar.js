import { View, Text } from 'react-native'
import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import React from 'react'
import { COLORS } from '../constants';

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;


const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
    //StatusBar.setBarStyle('dark-content', true);
    //StatusBar.setBarStyle('light-content', true);

    return isFocused ?
        <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: COLORS.primary }}>
            <StatusBar animated={true} barStyle="light-content" {...props} />
        </View>
        : null
}

export default FocusedStatusBar