import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import Header from "./components/Header";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./hooks/useAuth";

const App = () => (
  <NavigationContainer>
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </TailwindProvider>
  </NavigationContainer>
);

export default App;
