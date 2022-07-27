import { useTailwind } from "tailwind-rn";
import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const tw = useTailwind();

  const navigation = useNavigation();

  return (
    <View>
   
        <View style={tw("bg-blue-200 px-3 py-1 rounded-full")}>
          <Text style={tw("text-blue-300 font-semibold")}>I am home screen</Text>
        </View>

      <Button
        title=" Go to chat screen "
        onPress={() => navigation.navigate("Chat")}
      />
    </View>
  );
};

export default HomeScreen;
