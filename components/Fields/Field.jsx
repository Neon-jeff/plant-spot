import { View, Text, TextInput } from "react-native";
import React from "react";
import ThemedText from "../ThemedText/ThemedText";
import { colors } from "../../constants/Colors";
import Icon from "../Icons/Icon";

const Field = ({ label, placeholder, secure = false,width }) => {
  return (
    <View style={{ gap: 10, width: width ? width : "auto" }}>
      <ThemedText text={label} size={17} />
      <View
        style={{
          backgroundColor: colors.white,
          padding: 12,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
          borderColor: colors.grey,
        }}
      >
        <TextInput
          placeholder={placeholder}
          style={{ fontFamily: "regular", fontSize: 15 }}
          cursorColor={"black"}
        />
      </View>
    </View>
  );
};

export default Field;
