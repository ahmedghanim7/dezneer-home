import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import BottomTabIcon from "@/components/navigation/BottomTabIcon";
import { newColors } from "@/theme";
import {
  FeedIcon,
  ForumIcon,
  HomeIcon,
  SubscriptionIcon,
} from "@/assets/icons";

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: newColors.primary,
          tabBarInactiveTintColor: newColors.gray[100],
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: newColors.white,
            height: 45,
            paddingVertical: 2,
            paddingHorizontal: 20,
          },
        }}
      >
        {tabs.map((item) => (
          <Tabs.Screen
            key={item.name}
            name={item.name}
            options={{
              title: item.title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <BottomTabIcon
                  Icon={item.icon}
                  color={color}
                  name={item.title}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;

const tabs = [
  {
    title: "Timeline",
    name: "timeline",
    icon: HomeIcon,
  },
  {
    title: "Blogs",
    name: "blogs",
    icon: FeedIcon,
  },
  {
    title: "Videos",
    name: "videos",
    icon: SubscriptionIcon,
  },
  {
    title: "Messaging",
    name: "messaging",
    icon: ForumIcon,
  },
];
