import React from "react";
import { useTailwind } from "tailwind-rn";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  const tw = useTailwind();
  return (
    <View style={tw("pt-12 items-center")}>
      <View style={tw("bg-blue-200 px-3 py-1 rounded-full")}>
        <Text style={tw("text-blue-300 font-semibold")}>
          Hello Tailwind
        </Text>
      </View>
    </View>
  );
};

export default Header;
