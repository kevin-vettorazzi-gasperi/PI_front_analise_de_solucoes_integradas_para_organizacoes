import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from '../../screens/settings';
import { CategoriesScreen } from '../../screens/categories';
import { Image } from 'react-native';
import theme from '../styles/theme';

const Tabs = createBottomTabNavigator();

export function Routes() {

    return (
        <Tabs.Navigator
            screenOptions={{
                unmountOnBlur: true,
                headerShown: false,
                tabBarStyle: {
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    height: 50
                },
                tabBarLabelStyle: {
                    display: 'none',
                },
            }}
        >

            <Tabs.Screen
                options={{
                    tabBarIcon(props) {
                        return (
                            props.focused ?
                                <Image source={theme.icons.iconHomeRed} /> :
                                <Image source={theme.icons.iconHome} />
                        )
                    },
                }}
                name="Categories"
                component={CategoriesScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon(props) {
                        return (
                            props.focused ?
                            <Image source={theme.icons.iconsettingsRed} /> :
                                <Image source={theme.icons.iconsettings} /> 
                        )
                    },
                }}
                name="Settings"
                component={SettingsScreen}
            />
        </Tabs.Navigator>
    );
}

 