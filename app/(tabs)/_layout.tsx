import { Tabs } from "expo-router";
import React from "react";

import { BottomTab } from "@/@types";
import BottomTabIcon from "@/components/BottomTabIcon/BottomTabIcon";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {bottomTabsData.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <BottomTabIcon
                // icon={icons.home}
                color={color}
                name={tab.title}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

const bottomTabsData: BottomTab[] = [
  { name: "home", title: "Home" },
  { name: "explore", title: "Explore" },
];

