import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="settings" />
      <Tabs.Screen
        name="user/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
