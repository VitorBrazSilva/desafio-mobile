import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'
import Home from './pages/Home'
import Search from './pages/Search'
import FoundProducts from './pages/FoundProducts'

import DrawerSidebar from './components/DrawerSidebar'

const Routes = createStackNavigator(
    {
        Main: createDrawerNavigator({
            Home,
            Search,
            FoundProducts
        },
            {
                transitionConfig: () => defaultTransaction(),
                contentComponent: props => (<DrawerSidebar {...props} />)
            })
    },
    {
        headerMode: "none",
        defaultNavigationOptions: {
            transitionConfig: () => defaultTransaction(),
        }
    }
)


export default createAppContainer(Routes)