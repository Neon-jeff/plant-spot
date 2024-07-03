import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";

const ThemedText = ({
  text,
  style = "medium",
  size,
  color = colors.dark,
  align = "left",
  extras = {},
  children,
}) => {
  return (
    <View
  
    >
      <Text
        style={{
          fontFamily: style,
          fontSize: size,
          color: color,
          textAlign: align,
          ...extras,
        }}
      >
        {text}
        {children}
      </Text>
    </View>
  );
};

export default ThemedText;
