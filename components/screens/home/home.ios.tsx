import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import CustomButton from "@/components/ui/custom.button";

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
        This is IOS Page 🙌
      </Text>

      <CustomButton>
        <Link href={"/profile"} asChild>
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Route to tabs
          </Text>
        </Link>
      </CustomButton>
    </View>
  );
};

export default Home;
