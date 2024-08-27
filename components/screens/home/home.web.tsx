import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomeWebPage = () => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 10,
        }}
      >
        Hello
      </Text>
      <Link href={"/home"}>Route to Tabs web</Link>
    </View>
  );
};

export default HomeWebPage;
