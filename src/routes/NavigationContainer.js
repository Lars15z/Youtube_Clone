import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Shorts from '../screens/Shorts';
import Registrations from '../screens/Registrations';
import Profile from '../screens/Profile';
import { AntDesign, Feather, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Contents from '../screens/Contents';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" size={20} color="black" />
                )
            }} />
            <Tab.Screen name="Shorts" component={Shorts} options={{
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="youtube-with-circle" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Contents" component={Contents} options={{
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarLabel: () => { return null },
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="pluscircleo" size={30} color="black" />
                )
            }} />
            <Tab.Screen name="Registrations" component={Registrations} options={{
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="youtube-subscription" size={24} color="black" />
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                title: "You",
                headerShown: false,
                tabBarActiveTintColor: "black",
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="video-library" size={24} color="black" />
                )
            }} />
        </Tab.Navigator>
    );
}