import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Routes } from "./routes.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export function LoggedRoutes() {
  return (
    <>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Routes" component={Routes} />
      </Navigator>
    </>
  );
}