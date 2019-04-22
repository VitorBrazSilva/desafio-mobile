import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'
import Home from './pages/Home'
import Search from './pages/Search'
import FoundProducts from './pages/FoundProducts'
import Categories from './pages/Categories'
import CategoriesInternal from './pages/CategoriesInternal'

import DrawerSidebar from './components/DrawerSidebar'

const Routes = createStackNavigator(
    {
        Main: createDrawerNavigator({
            Home,
            Search,
            FoundProducts,
            Categories,
            CategoriesInternal
        },
            {
                transitionConfig: () => defaultTransaction(),
                contentComponent: props => (<DrawerSidebar {...props} />)
            }),   
    },
    {
        headerMode: "none",
        defaultNavigationOptions: {
            transitionConfig: () => defaultTransaction(),
        }
    }
)


export default createAppContainer(Routes)