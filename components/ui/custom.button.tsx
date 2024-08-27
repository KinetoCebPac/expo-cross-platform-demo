import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";

type ButtonProps = {
  bgColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>; // Add a style prop for custom styling
};

const CustomButton = ({
  bgColor = "black",
  onPress,
  children,
  style, // Destructure the style prop
}: PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: bgColor,
          padding: 10,
          borderRadius: 10,
          width: 150,
        },
        style,
      ]} // Merge the default styles with custom styles
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;
