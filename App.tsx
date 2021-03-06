// import dotenv from 'dotenv';
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ChatList } from "./Screens/ChatList";
import { Home } from "./Screens/Home";
import { ChatRoom } from "./Screens/ChatRoom";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Login } from "./Screens/Login";
import { Setting } from "./Screens/Setting";
import { UserProvider } from "./Context/UserContext";
import { FriendList } from "./Screens/FriendList";
import { FriendHeaderLeft } from "./Screens/components/FriendHeaderLeft";
import { SettingHeaderRight } from "./Screens/components/SettingHeaderRight";
// const result = dotenv.config();
// console.log(result);
const Stack = createNativeStackNavigator<{
  ChatList: undefined;
  ChatRoom: undefined;
  Home: undefined;
  Login: undefined;
  Setting: undefined;
  FriendList: undefined;
}>();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen
              name="FriendList"
              component={FriendList}
              options={{
                headerLeft: () => <View />,
                headerRight: () => <FriendHeaderLeft />,
              }}
            />
            <Stack.Screen
              name="ChatList"
              component={ChatList}
              options={{
                headerLeft: () => <View />,
                headerRight: () => <SettingHeaderRight />,
              }}
            />
            <Stack.Screen name="ChatRoom" component={ChatRoom} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </View>
  );
}
