import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import SettingsScreen from './screens/Settings';

//Screen names
const homeName = "Beranda";
const detailsName = "Pesanan Saya";
const settingsName = "Pembatalan";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "basketball-sharp" : 'basketball-sharp';

            } else if (rn === detailsName) {
              iconName = focused ? 'medical' : 'medical';

            } else if (rn === settingsName) {
              iconName = focused ? 'add-circle-sharp' : 'add-circle-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarinactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70}
        })}
        >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;