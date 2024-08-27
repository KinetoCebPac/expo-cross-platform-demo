import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const UserIdPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 50 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
          }}
        >
          Params received : {id}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserIdPage;
