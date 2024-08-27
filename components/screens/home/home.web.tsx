import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import CustomButton from "@/components/ui/custom.button";

const HomeWebPage = () => {
  return (
    <View
      style={{
        marginHorizontal: 100,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          marginBottom: 10,
          fontWeight: "bold",
          fontSize: 50,
        }}
      >
        Hello From Web 💻
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

export default HomeWebPage;
