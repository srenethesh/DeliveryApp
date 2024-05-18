import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from './BottomNav'
const stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen 
            name="BottomNav"
            component={BottomNav}
            options={{headerShown:false}}
            />
            </stack.Navigator>
            </NavigationContainer>
    )
}