import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginBottom: 10,
        }}
      >
        This is Android Page 🙌
      </Text>
      <Link href={"/home"}>Route to tabs</Link>
    </View>
  );
};

export default Home;
