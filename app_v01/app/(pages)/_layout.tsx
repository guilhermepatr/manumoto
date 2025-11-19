import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";
import React from "react";

export default function _layout() {
  const router = useRouter();
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="moto"
        options={{
          headerShown: false,
          title: "Moto",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="motorcycle" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(home)"
        listeners={{
          tabPress: (e) => {
            // impede o comportamento padrão
            e.preventDefault();
            // força a navegação para a tela inicial
            router.replace("/(pages)/(home)/home");
          },
        }}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
