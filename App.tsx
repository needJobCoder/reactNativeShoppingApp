import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// redux
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';

// Components
import ShopList from './components/ShopList';
import Login from './components/Login';
import Cart from './components/Cart';
import CartList from './components/CartList';
import SignUp from './components/SignUp';



const App = () => {
  // const loginState = useSelector(state => state.login.value)
  const [login, setLogin] = useState<boolean>(false)
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          {/* {(loginState.value === true) ? <>
            <Tab.Screen name='ShopList' component={ShopList} />
            <Tab.Screen name='Items' component={Cart} />
            <Tab.Screen name='Cart' component={CartList} />
          </> : <>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='SignUp' component={SignUp} />
          </>} */}
          <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='SignUp' component={SignUp} />
            <Tab.Screen name='ShopList' component={ShopList} />
            <Tab.Screen name='Items' component={Cart} />
            <Tab.Screen name='Cart' component={CartList} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  )
}

export default App