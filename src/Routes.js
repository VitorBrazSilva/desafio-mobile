import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'

import Home from './pages/Home'

import DrawerSidebar from './components/DrawerSidebar'

const Routes = createStackNavigator(
    {
        Main: createDrawerNavigator({
            Home,
        },
        {
            transitionConfig: () => defaultTransaction(),
            contentComponent: props => (<DrawerSidebar {...props}/>)
        })
    },
    {  
        // headerMode: "none",
        navigationOptions: {
            transitionConfig: () => defaultTransaction(),
        }
    }
)


export default createAppContainer(Routes)