import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AppColors from '../components/AppColors';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Dashboard from '../screens/dashboard/dashboard';


//Store Screens
import Store ,{screensOptionsc as StoreScreenOptions} from '../screens/store/store';
import SubCategory,{screensOptions as SubCategoryScreenOptions}  from '../screens/store/subCategory';
import Product,{screensOptions as ProductScreenOptions}  from '../screens/store/product';
import ProductDetails,{screensOptions as ProductDetailsScreenOptions}  from '../screens/store/productDetails';
//Favorites Screen
import Favorites,{screensOptions as FavoritesScreenOptions} from '../screens/favorites/favorites';
import ProductFavDetails,{screensOptions as ProductFavDetailsScreenOptions} from '../screens/favorites/productFavDetails';

const defaultNavOptions = {
    headerStyle: {backgroundColor:AppColors.white},
    headerTintColor: AppColors.bitter,
    headerTitleStyle: {fontFamily: 'IBMP-light'}
}

const StoreStackNavigator = createNativeStackNavigator();
export const StoreStack = () => {
    return(
        <StoreStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <StoreStackNavigator.Screen name='Category' component={Store} options={StoreScreenOptions} />
            <StoreStackNavigator.Screen name='SubCategory' component={SubCategory} options={SubCategoryScreenOptions}/>
            <StoreStackNavigator.Screen name='Product' component={Product} options={ProductScreenOptions}/>
            <StoreStackNavigator.Screen name='ProductDetails' component={ProductDetails} options={ProductDetailsScreenOptions}/>
        </StoreStackNavigator.Navigator>
    )
}

const FavoritesStackNavigation = createNativeStackNavigator();
export const FavoritesStack = () => {
    return(
        <FavoritesStackNavigation.Navigator screenOptions={defaultNavOptions}>
            <FavoritesStack.Screen name='Favorites' component={Favorites} options={FavoritesScreenOptions} />
            <FavoritesStack.Screen name='ProductFavDetails' component={ProductFavDetails} options={ProductFavDetailsScreenOptions} />
        </FavoritesStackNavigation.Navigator>
    )
}


const AppTabs = createMaterialBottomTabNavigator();

export const TabNavigator = () => {

        return(
            <AppTabs.Navigator activeColor={AppColors.bitter} inactiveColor={AppColors.outer_space} barStyle={{backgroundColor : AppColors.platinum}}>
                <AppTabs.Screen name='Dashboard' component={Dashboard} 
                options={{
                    tabBarLabel: 'Main',
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name='view-dashboard' color={color} size={28}/>)}}/>
                <AppTabs.Screen name='Store' component={StoreStack} 
                options={{
                    tabBarLabel: 'Store',
                    tabBarIcon: ({color}) => (<MaterialIcons  name='store' color={color} size={28}/>)}}/>
                <AppTabs.Screen name='Favorites' component={Favorites}
                 options={{
                    tabBarLabel: 'Saved',
                    tabBarIcon: ({color}) => <Ionicons name='ios-star' color={color} size={28}/>}}/>
            </AppTabs.Navigator>
        )
}