import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ListPreviewScreen from "./screens/ListPreviewScreen";
import AllTasksScreen from "./screens/AllTasksScreen";
import TodayScreen from "./screens/TodayScreen";
import { Provider } from "react-redux";
import reduxStore from "./store/redux/store";
import { View } from "react-native";
import { COLORS } from "./constants/CONSTANTS";
import { StatusBar } from "expo-status-bar";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createNativeStackNavigator();
export default function App() {
  const { store, persistor } = reduxStore();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Stack.Navigator
              screenOptions={{
                headerShadowVisible: false,
                headerTintColor: COLORS.HEADS,
                headerStyle: { backgroundColor: COLORS.COLOR10 },
                animation: "slide_from_right",
                animationDuration: 50,
              }}
            >
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerTitle: "ToDo List Application" }}
              />
              <Stack.Screen name="ListPreview" component={ListPreviewScreen} />
              <Stack.Screen name="AllTasks" component={AllTasksScreen} />
              <Stack.Screen name="Today" component={TodayScreen} />
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </View>
  );
}
