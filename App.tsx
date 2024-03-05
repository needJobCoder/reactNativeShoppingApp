import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import ShopList from './components/ShopList';
import Login from './components/Login';
import Cart from './components/Cart';
import CartList from './components/CartList';




const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Login' component={Login} />
          <Tab.Screen name='ShopList' component={ShopList} />
          <Tab.Screen name='Items' component={Cart} />
          <Tab.Screen name='Cart' component={CartList} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App