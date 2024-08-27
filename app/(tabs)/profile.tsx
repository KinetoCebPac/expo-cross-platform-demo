import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/ui/custom.button";
import { useRouter } from "expo-router";
const ProfileTabs = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 25 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          ProfileTabs
        </Text>

        <CustomButton
          style={{
            width: 200,
          }}
          onPress={() => {
            router.push({
              pathname: "/user/[id]",
              params: {
                id: 1,
              },
            });
          }}
        >
          <Text style={{ color: "white" }}>Navigate to user with 1 id</Text>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default ProfileTabs;
