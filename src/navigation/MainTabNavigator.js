import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import ChatsScreens from "../screens/ChatsScreen";
import { Ionicons, Entypo } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Chats" screenOptions={{
            tabBarStyle: {backgroundColor: 'whitesmoke'},
            headerStyle: {backgroundColor: 'whitesmoke'},
        }}>
            <Tab.Screen name="Status" component={NotImplementedScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="logo-whatsapp" color={color} size={size} /> }} />
            <Tab.Screen name="Calls" component={NotImplementedScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="call-outline" color={color} size={size} /> }} />
            <Tab.Screen name="Camera" component={NotImplementedScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="camera-outline" color={color} size={size} /> }} />
            <Tab.Screen name="Chats" component={ChatsScreens} 
                options={
                    { 
                        tabBarIcon: ({ color, size }) => (<Ionicons name="ios-chatbubbles-sharp" color={color} size={size} />), 
                        headerRight: () => (
                            <Entypo name="new-message" size={18} color={'royalblue'} style={{marginRight: 15}} />
                        )
                    }
                } />
            <Tab.Screen name="Settings" component={NotImplementedScreen} options={{ tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} /> }} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;