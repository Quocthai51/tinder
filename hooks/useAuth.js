import { View, Text } from "react-native";
import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});

const config = {
  androidClientId:
    "474618568505-okgvfukopl3b8pi5dhvara387et193da.apps.googleusercontent.com",
  iosClientId:
    "474618568505-bn1uokeh8nrbodmgjplfmnhaogrkbbgh.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === "success") {
        //login..
      }
    });
  };

  return (
    <AuthContext.Provider value={{ user: null, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
