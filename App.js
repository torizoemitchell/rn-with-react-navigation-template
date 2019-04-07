import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import SettingsScreen from './src/screens/SettingsScreen'

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);


